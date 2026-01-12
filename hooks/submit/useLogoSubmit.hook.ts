"use client";
import { redirect } from "next/navigation";
import { useCallback, useState } from "react";
import { SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { useUpload } from "@/hooks/mutations/useUpload.hook";
import { LogoSchemaType } from "@/validations/logo.zod";
import { useLogoMutation } from "@/hooks/mutations/useLogoMutation.hook";

export function useLogoSubmit(files?: FileList | null) {
  const [loading, setLoading] = useState(false);
  const { mutateAsync: upload } = useUpload();
  const { mutateAsync: updateLogo } = useLogoMutation();

  const onSubmit: SubmitHandler<LogoSchemaType> = useCallback(
    async (data) => {
      let success = false;
      const fileUrls: string[] = [];
      setLoading(true);
      try {
        const fullName = data.fullName;
        const useImage = data.useImage;

        if (files) {
          for (const file of files) {
            const response = await upload(file);
            const { filename } = await response.json();
            fileUrls.push(filename);
          }
        }

        const imagePath = fileUrls.length > 0 ? fileUrls[0] : null;

        await updateLogo({ fullName, imagePath, useImage });

        success = true;
        toast.success("Email was sent successfully");
      } catch (error) {
        toast.error("Something went wrong. Please try again.");
        console.log(JSON.stringify(error));
      }
      setLoading(false);
      if (success) {
        redirect("/");
      }
    },

    [files, upload, updateLogo],
  );

  return { loading, onSubmit };
}
