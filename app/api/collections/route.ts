
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
    const collectionID = searchParams.get("collectionID")!;
    console.log('collectionID'+collectionID)


    try {
        if (!collectionID ) {
            const collections = await collectionsModel.find().sort({ createdAt: -1 });
            console.log("collections", collections)
            return NextResponse.json(collections, { status: 200 });
        }
        else{

            const collection = await collectionsModel.findById(collectionID)
            return NextResponse.json({
                data: collection,
                // total: totalProducts,
                // currentPage: page,
                // totalPages: Math.ceil(totalProducts / limit),
            }, { status: 200 });
        }
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch orders" }, { status: 500 });
    }
}