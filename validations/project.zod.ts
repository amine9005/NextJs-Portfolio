import { UseFormReturn } from "react-hook-form";
import { z } from "zod";

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
    z.object({
      path: z
        .string({ message: "Image Path Is Required" })
        .min(1, { message: "Image Path Is Required" }),
    }),
  )
  .optional();

export const projectModelsValidation = z
  .array(
    z.object({
      path: z
        .string({ message: "Model File Path Is Required" })
        .min(1, { message: "Model File Path Is Required" }),
    }),
  )
  .optional();

export const projectVideosValidation = z
  .array(
    z.object({
      path: z
        .string({ message: "Video File Path Is Required" })
        .min(1, { message: "Video File Path Is Required" }),
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
        path: ["projectImages", "projectModels", "projectVideos"],
      });
    }
  });

export type projectSchemaType = z.infer<typeof projectSchema>;
export type ProjectFormType = UseFormReturn<projectSchemaType>;
