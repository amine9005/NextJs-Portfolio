import mongoose, { HydratedDocument, InferSchemaType } from "mongoose";
const heroSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    leftColor: { type: String, required: false, default: "#fff" },
    rightColor: { type: String, required: false, default: "#fff" },
  },
  { timestamps: true },
);

const HeroModel = mongoose.models.hero || mongoose.model("hero", heroSchema);

export default HeroModel;
export type Hero = InferSchemaType<typeof heroSchema>;
export type HeroDocument = HydratedDocument<Hero>;
