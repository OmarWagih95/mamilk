import { NextResponse } from "next/server";
import { ConnectDB } from "@/app/config/db";
import HeroCarouselModel from "@/app/modals/heroCarouselModel";

export async function GET() {
  try {
    await ConnectDB();
    const slides = await HeroCarouselModel.find({ isActive: true }).sort({ order: 1 });
    return NextResponse.json(slides);
  } catch (error: any) {
    console.error("Error fetching hero carousel slides:", error);
    return NextResponse.json(
      { message: "Error fetching slides", error: error.message },
      { status: 500 }
    );
  }
}
