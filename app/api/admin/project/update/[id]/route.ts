// src/app/api/users/[id]/delete/route.ts
import { NextRequest, NextResponse } from "next/server";
import { getClient } from "@/db/mongoose";
import ProjectModel from "@/db/models/Project.model";

await getClient();

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  // console.log("Updating Project from route");
  try {
    const projectId = (await params).id;
    const body = await req.json();
    const { isFeatured } = body;
    // console.log("is now featured: ", isFeatured);
    await ProjectModel.updateOne(
      { _id: projectId },
      { isFeatured: isFeatured },
    );
    return NextResponse.json(
      { message: "project Updated successfully" },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to Updated project", error: error },
      { status: 500 },
    );
  }
}
