import { NextRequest, NextResponse } from "next/server";
import { getClient } from "@/db/mongoose";
import LogoModel from "@/db/models/Logo.Model";
await getClient();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { fullName, imagePath, useImage } = body;
    const doc = (await LogoModel.find())[0];
    // console.log("doc ", doc);

    if (!doc) {
      LogoModel.create({
        fullName,
        imagePath,
        useImage,
      });
    } else {
      doc.fullName = fullName;
      doc.imagePath = imagePath;
      doc.useImage = useImage;
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
