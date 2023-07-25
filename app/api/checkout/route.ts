import { NextResponse } from "next/server";
import mongooseConnect from "@/app/_lib/mongoose";
import { Product } from "@/app/_models/Product";
import { Order } from "@/app/_models/Order";

const stripe = require('stripe')(process.env.STRIPE_SK)

export async function POST(req: Request): Promise<NextResponse> {
    await mongooseConnect()

    const body: InputData = await req.json()
    const { name, email, city, postalCode, streetAddress, country, cartProducts } = body

    const productsIds = cartProducts
    const uniqueIds = [...new Set(productsIds)]
    const productsInfos = await Product.find({ _id: uniqueIds })

    let line_items = []
    for (const productId of uniqueIds) {
        const productInfo = productsInfos.find(p => p._id.toString() === productId)
        const quantity = productsIds.filter(id => id === productId)?.length || 0
        if (quantity > 0 && productInfo) {
            line_items.push({
                quantity,
                price_data: {
                    currency: 'USD',
                    product_data: { name: productInfo.title },
                    unit_amount: quantity * productInfo.price * 100,
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
    products: string
}