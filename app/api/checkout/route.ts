import { NextResponse } from "next/server";
import mongooseConnect from "@/app/_lib/mongoose";
import { Product } from "@/app/_models/Product";
import { Order } from "@/app/_models/Order";
import { IProduct } from "@/app/page";

const stripe = require('stripe')(process.env.STRIPE_SK)

export async function POST(req: Request): Promise<NextResponse> {
    await mongooseConnect()

    const { name, email, city, postalCode, streetAddress, country, cartProducts }: InputData = await req.json()

    const uniqueIds = [...new Set(cartProducts)]
    const productsInfos: IProduct[] = await Product.find({ _id: uniqueIds })

    let line_items = []
    for (const productId of uniqueIds) {
        const productInfo: IProduct | undefined = productsInfos.find(p => p._id.toString() === productId)

        const quantity = cartProducts.filter((id: string) => id === productId)?.length || 0
        if (quantity > 0 && productInfo) {
            line_items.push({
                quantity,
                price_data: {
                    currency: 'USD',
                    product_data: { name: productInfo.title },
                    unit_amount: productInfo.price * 100,
                }
            })
        }
    }

    const orderDoc = await Order.create({
        line_items, name, email, city, postalCode, streetAddress, country, paid: false
    })

    const session = await stripe.checkout.sessions.create({
        line_items,
        mode: 'payment',
        customer_email: email,
        success_url: process.env.PUBLIC_URL + '/cart?success=1',
        cancel_url: process.env.PUBLIC_URL + '/cart?canceled=1',
        metadata: { orderId: orderDoc._id.toString() },
    })

    return NextResponse.json({
        url: session.url
    })
}

interface InputData {
    name: string
    email: string
    city: string
    postalCode: string
    streetAddress: string
    country: string
    cartProducts: string[]
}