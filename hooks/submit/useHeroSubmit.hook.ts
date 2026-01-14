"use client";
// import { redirect } from "next/navigation";
import { useCallback, useState } from "react";
import { SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { useHeroMutation } from "@/hooks/mutations/useHeroMutation.hook";
import { HeroSchemaType } from "@/validations/hero.zod";

export function useHeroSubmit() {
  const [loading, setLoading] = useState(false);
  const { mutateAsync: updateLogo } = useHeroMutation();

  const onSubmit: SubmitHandler<HeroSchemaType> = useCallback(
    async (data) => {
      let success = false;
      setLoading(true);
      try {
        const fullName = data.fullName;
        const leftColor = data.leftColor;
        const rightColor = data.rightColor;
        const description = data.description;
        const title = data.title;

        await updateLogo({
          fullName,
          description,
          title,
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

    [updateLogo],
  );

  return { loading, onSubmit };
}
