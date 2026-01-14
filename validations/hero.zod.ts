import { UseFormReturn } from "react-hook-form";
import { z } from "zod";
export const fullNameValidation = z
  .string()
  .min(3, { message: "Username must be at least 3 char longs" })
  .max(32, { message: "Username cannot exceed 32 characters" })
  .regex(/^[a-z0-9A-Z -]+$/, "Username must not contain special characters");

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

export const rightColorValidation = z.string({ message: "Invalid Color" });

export const leftColorValidation = z.string({ message: "Invalid Color" });

export const heroSchema = z.object({
  fullName: fullNameValidation,
  title: titleValidation,
  description: descriptionValidation,
  leftColor: leftColorValidation,
  rightColor: rightColorValidation,
});

export type HeroSchemaType = z.infer<typeof heroSchema>;

export type HeroFormType = UseFormReturn<HeroSchemaType>;
