"use client";
import { sendContactMeEmailAction } from "@/app/api/actions/emails/emails.controller";
import { ContactMeSchemaType } from "@/validations/ContactMe.zod";
import { redirect } from "next/navigation";
import { useCallback, useState } from "react";
import { SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";

export function useContactMeSubmit() {
  const [loading, setLoading] = useState(false);
  const onSubmit: SubmitHandler<ContactMeSchemaType> = useCallback(
    async (data) => {
      let success = false;
      setLoading(true);
      try {
        const fullName = data.firstName + data.lastName;
        const email = data.email;
        const subject = data.subject;
        const description = data.description;

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

    [],
  );

  return { loading, onSubmit };
}
