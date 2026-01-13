"use client";
// import { redirect } from "next/navigation";
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
        const leftColor = data.leftColor;
        const rightColor = data.rightColor;
        const useImage = data.useImage;

        if (files) {
          for (const file of files) {
            const response = await upload({ file: file, logo: "YES" });
            const { filename } = await response.json();
            fileUrls.push(filename);
          }
        }

        const imagePath = fileUrls.length > 0 ? fileUrls[0] : null;

        await updateLogo({
          fullName,
          imagePath,
          useImage,
          leftColor,
          rightColor,
        });

        success = true;
        toast.success("Logo Updated Successfully");
      } catch (error) {
        toast.error("Something went wrong. Please try again.");
        console.log(JSON.stringify(error));
      }
      setLoading(false);
      return success;
    },

    [files, upload, updateLogo],
  );

  return { loading, onSubmit };
}
