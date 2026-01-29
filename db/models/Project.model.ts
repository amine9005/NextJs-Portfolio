import mongoose, { HydratedDocument, InferSchemaType } from "mongoose";
const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    images: [{ type: String, required: false }],
    models: [{ type: String, required: false }],
    videos: [{ type: mongoose.Schema.ObjectId, ref: "video" }],
  },
  { timestamps: true },
);

const ProjectModel =
  mongoose.models.project || mongoose.model("project", projectSchema);

export default ProjectModel;
export type Project = InferSchemaType<typeof projectSchema>;
export type ProjectDocument = HydratedDocument<Project>;
