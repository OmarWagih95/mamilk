
import productModel from "@/app/modals/productsModel";
import { ConnectDB } from "@/app/config/db";
import { NextResponse } from "next/server";
import collectionsModel from "@/app/modals/collectionsModel";

const loadDB = async () => {
    await ConnectDB();
};

loadDB();

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const categoryID = searchParams.get("categoryID")!;
    console.log('categoryID'+categoryID)


    try {
        if (categoryID === "all") {
            const collections = await collectionsModel.find().sort({ createdAt: -1 });
            return NextResponse.json({
                data: collections,
            }, { status: 200 });
        }
        else{

            const collection = await collectionsModel.findById(categoryID)
            return NextResponse.json({
                data: collection,
                // total: totalProducts,
                // currentPage: page,
                // totalPages: Math.ceil(totalProducts / limit),
            }, { status: 200 });
        }
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch categories" }, { status: 500 });
    }
}