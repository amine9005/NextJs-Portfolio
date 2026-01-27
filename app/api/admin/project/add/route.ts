import { NextRequest, NextResponse } from "next/server";
import { getClient } from "@/db/mongoose";
import ProjectModel from "@/db/models/Project.model";
await getClient();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { title, description, projectImages, projectModels, projectVideos } =
      body;
    // console.log("title ", title, "description: ", description);

    const project = await ProjectModel.create({
      title,
      description,
      images: projectImages,
      models: projectModels,
      videos: projectVideos,
    });

    return NextResponse.json(
      { message: "Project Added successfully", project: project },
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
