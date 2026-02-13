import { NextRequest, NextResponse } from "next/server";
import { getClient } from "@/db/mongoose";
import mongoose from "mongoose";
import ThumbnailModel from "@/db/models/Thumbnail.model";

await getClient();

export async function POST(req: NextRequest) {
  try {
    const dbSession = await mongoose.startSession();
    dbSession.startTransaction();

    const body = await req.json();
    const { type, source, fileOrUrl } = body;
    // console.log("title ", title, "description: ", description);

    const thumbnail = await ThumbnailModel.create(
      [
        {
          type,
          source,
          fileOrUrl,
        },
      ],
      { session: dbSession },
    );
    await dbSession.commitTransaction();
    dbSession.endSession();
    return NextResponse.json(
      { message: "Project Added successfully", thumbnail: thumbnail },
      {
        status: 201,
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
