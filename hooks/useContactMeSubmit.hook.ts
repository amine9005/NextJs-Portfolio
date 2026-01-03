"use client";
import { sendContactMeEmailAction } from "@/app/api/actions/emails/emails.controller";
import { ContactMeSchemaType } from "@/validations/ContactMe.zod";
import { redirect } from "next/navigation";
import { useCallback, useState } from "react";
import { SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { useUpload } from "@/hooks/useUpload.hook";

export function useContactMeSubmit(files?: FileList | null) {
  const [loading, setLoading] = useState(false);
  const { mutate: upload } = useUpload();

  const onSubmit: SubmitHandler<ContactMeSchemaType> = useCallback(
    async (data) => {
      let success = false;
      const fileUrls = [];
      setLoading(true);
      try {
        const fullName = data.firstName + data.lastName;
        const email = data.email;
        const subject = data.subject;
        const description = data.description;

        if (files) {
          for (const file of files) {
            console.log("uploading file");
            upload(file, {
              onSuccess: (response) => {
                if (response.status === 200) {
                } else {
                  toast.error("failed to upload files");
                  throw new Error("failed to upload file ");
                }
              },
              onError: (error) => {
                toast.error("failed to upload file");
                throw new Error("failed to upload file ", error);
              },
            });
          }
        }

        await sendContactMeEmailAction(fullName, email, subject, description);

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

    [files, upload],
  );

  return { loading, onSubmit };
}
