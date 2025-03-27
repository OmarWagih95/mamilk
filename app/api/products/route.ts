import { ConnectDB } from "@/app/config/db";
import productModel from "@/app/modals/productsModel";
import { NextResponse } from "next/server";

await ConnectDB();

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const productID = searchParams.get("productID")!;
    console.log('productID'+productID)
    // const page = parseInt(searchParams.get("page") || "1", 10);
    // const limit = 10;
    // const skip = (page - 1) * limit;

    try {
        const product = await productModel.findById(productID)
        // const totalProducts = await productModel.countDocuments();

        return NextResponse.json({
            data: product,
            // total: totalProducts,
            // currentPage: page,
            // totalPages: Math.ceil(totalProducts / limit),
        }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch orders" }, { status: 500 });
    }
}