import mongoose, { HydratedDocument, InferSchemaType } from "mongoose";
const settingsSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    leftColor: { type: String, required: false, default: "#fff" },
    rightColor: { type: String, required: false, default: "#fff" },
  },
  { timestamps: true },
);

const SettingsModel =
  mongoose.models.settings || mongoose.model("settings", settingsSchema);

export default SettingsModel;
export type Settings = InferSchemaType<typeof settingsSchema>;
export type SettingsDocument = HydratedDocument<Settings>;
