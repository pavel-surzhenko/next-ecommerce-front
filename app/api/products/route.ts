import mongooseConnect from "@/app/_lib/mongoose";
import { Product } from "@/app/_models/Product";
import { IProduct } from "@/app/page";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    await mongooseConnect()
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    const product: IProduct | null = await Product.findById(id)!
    return NextResponse.json(product)

}