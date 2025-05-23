import { ConnectDB } from "@/app/config/db";
import productModel from "@/app/modals/productsModel";
import { NextResponse } from "next/server";

await ConnectDB();

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const productID = searchParams.get("productID")!;
    const categoryID = searchParams.get("categoryID")!;
    const season = searchParams.get("season")!;
    console.log('productID'+productID)
    const moreToShop = searchParams.get("moreToShop")!;
    console.log('moreToShop'+moreToShop)
    
    // const page = parseInt(searchParams.get("page") || "1", 10);
    // const limit = 10;
    // const skip = (page - 1) * limit;
if(productID){

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
else if(moreToShop){
    try {
        const products = await productModel.find({}).limit(8).skip(0)
        // const totalProducts = await productModel.countDocuments();
        console.log("productsLength" + products.length)
        return NextResponse.json({
            data: products,
            // total: totalProducts,
            // currentPage: page,
            // totalPages: Math.ceil(totalProducts / limit),
        }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch orders" }, { status: 500 });
    }
}

else if(categoryID && season){
    try {
        const products = await productModel.find({
          $or: [
            { categoryID: categoryID, season: season },
            { categoryID: categoryID, season: "all" }
          ]
        })
        console.log("productsLength" + products.length)
        return NextResponse.json({
            data: products,
        }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch products season" }, { status: 500 });
    }
}
else if(categoryID){
    try {
        const products = await productModel.find({ categoryID: categoryID })
        console.log("productsLength" + products.length)
        return NextResponse.json({
            data: products,
        }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
    }
}
else if(season){
    try {
        const products = await productModel.find({
          $or: [
            { season: season },
            { season: "all" }
          ]
        })
        console.log("productsLength" + products.length)
        return NextResponse.json({
            data: products,
        }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch products by season" }, { status: 500 });
    }
}
else{
    return NextResponse.json({ error: "productID or moreToShop not found" }, { status: 500 });
}
}