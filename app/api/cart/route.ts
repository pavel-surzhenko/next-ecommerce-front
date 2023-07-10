import mongooseConnect from "@/app/_lib/mongoose";
import { Product } from "@/app/_models/Product";
import { NextResponse } from "next/server";

export async function POST(req: Request): Promise<NextResponse> {
    await mongooseConnect()

    const body: { ids: string[] } = await req.json()

    const { ids } = body
    return NextResponse.json(await Product.find({ _id: ids }))
}