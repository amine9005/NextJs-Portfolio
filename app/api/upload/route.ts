import { validateFile } from "@/validations/upload.validate";
import fs from "fs";
import { NextRequest, NextResponse } from "next/server";
import path from "path";

const DIR_PATH = path.resolve(`./uploads`);
if (!fs.existsSync(DIR_PATH)) {
  fs.mkdirSync(DIR_PATH, { recursive: true });
}
export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;
    if (!file) {
      return new NextResponse(JSON.stringify({ error: "No file provided" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }
    if (!(file instanceof Blob)) {
      return new NextResponse(
        JSON.stringify({ error: "Invalid file format" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        },
      );
    }

    if (!validateFile(file)) {
      throw new Error("Invalid File");
    }
    const filename = file.name;
    const fileType = file.type;
    const fileSize = file.size;
    const fileArrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(fileArrayBuffer);
    const filePath = path.resolve(DIR_PATH, filename);
    await fs.writeFileSync(filePath, buffer);
    return new NextResponse(
      JSON.stringify({
        success: true,
        filename,
        fileType,
        fileSize,
        destination: filePath,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      },
    );
  } catch (error) {
    console.error("Error handling file upload:", error);
    return new NextResponse(
      JSON.stringify({
        error: "Error handling file upload",
        details: error instanceof Error ? error.message : String(error),
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    );
  }
}
