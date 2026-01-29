import { UseFormReturn } from "react-hook-form";
import { z } from "zod";
import { videoSource } from "@/validations/hero.zod";

export const titleValidation = z
  .string()
  .min(3, { message: "Title must be at least 3 char longs" })
  .max(32, { message: "Title cannot exceed 32 characters" })
  .regex(/^[a-z0-9A-Z -]+$/, "Title must not contain special characters");

export const descriptionValidation = z
  .string()
  .min(30, { message: "Description must be at least 30 char longs" })
  .max(200, { message: "Title cannot exceed 200 characters" })
  .regex(/^[a-z0-9A-Z -.,@]+$/, "Title must not contain special characters");

export const projectImagesValidation = z
  .array(
    z
      .string({ message: "Image Is Required" })
      .min(1, { message: "Image Is Required" }),
  )
  .optional();

export const projectModelsValidation = z
  .array(
    z
      .string({ message: "Model Is Required" })
      .min(1, { message: "Model Is Required" }),
  )
  .optional();

export const projectVideosValidation = z
  .array(
    z
      .object(
        {
          source: z.enum(videoSource),
          fileName: z
            .string({ message: "A Video File Is Required" })
            .optional(),
          url: z.string({ message: "A Video Url Is Required" }).optional(),
        },
        { message: "A Video Is Required" },
      )
      .superRefine(({ source, fileName, url }, ctx) => {
        if (source === "Upload" && !fileName) {
          ctx.addIssue({
            code: "custom",
            message: "A Video File Is Required",
            path: ["fileName", "projectVideos"],
          });
        }
        if (source != "Upload" && !url) {
          ctx.addIssue({
            code: "custom",
            message: "A Video Url Is Required",
            path: ["url"],
          });
        }
      }),
  )
  .optional();

export const projectSchema = z
  .object({
    title: titleValidation,
    description: descriptionValidation,
    projectImages: projectImagesValidation,
    projectModels: projectModelsValidation,
    projectVideos: projectVideosValidation,
  })
  .superRefine(({ projectImages, projectModels, projectVideos }, ctx) => {
    if (!projectImages && !projectModels && !projectVideos) {
      ctx.addIssue({
        code: "custom",
        message: "No Project Media Was Provided",
        path: ["projectImages"],
      });
    }
  });

export type projectSchemaType = z.infer<typeof projectSchema>;
export type ProjectFormType = UseFormReturn<projectSchemaType>;
