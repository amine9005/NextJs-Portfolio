import { deleteFileHelper } from "@/helpers/deleteFile.helper";
import * as fs from "fs";

import path from "path";
const DIR_PATH = path.resolve(`./public/hero/images`);
if (!fs.existsSync(DIR_PATH)) {
  fs.mkdirSync(DIR_PATH, { recursive: true });
}
export async function DELETE({ params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id;
  await deleteFileHelper(id, DIR_PATH);
}
