import { NextRequest, NextResponse } from "next/server";
import { getClient } from "@/db/mongoose";
import HeroModel from "@/db/models/Hero.model";
await getClient();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { fullName, description, title, leftColor, rightColor } = body;
    const doc = (await HeroModel.find())[0];
    // console.log("fullName ", fullName, "description: ", description);

    if (!doc) {
      HeroModel.create({
        fullName,
        description,
        title,
        leftColor,
        rightColor,
      });
    } else {
      doc.fullName = fullName;
      doc.description = description;
      doc.title = title;
      doc.leftColor = leftColor;
      doc.rightColor = rightColor;
      await doc.save();
    }

    return NextResponse.json(
      { message: "Logo Updated successfully" },
      {
        status: 200,
      },
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal Server Error", error },
      { status: 500 },
    );
  }
}

export async function GET() {
  try {
    const hero = await HeroModel.find().limit(1);
    if (!hero || hero.length === 0) {
      return NextResponse.json(
        { message: "Hero data not found" },
        { status: 404 },
      );
    }
    return NextResponse.json({ hero: hero[0] }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal Server Error", error },
      { status: 500 },
    );
  }
}
