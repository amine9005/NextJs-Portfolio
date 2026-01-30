"use client";
// import { redirect } from "next/navigation";
import { useCallback, useState } from "react";
import { SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { useAddProjectMutation } from "@/hooks/mutations/useAddProjectMutation.hook";
import { projectSchemaType } from "@/validations/project.zod";
import { Video } from "@/types/project.types";

export function useAddProjectSubmit() {
  const [loading, setLoading] = useState(false);
  const { mutateAsync: updateAddProject } = useAddProjectMutation();

  const onSubmit: SubmitHandler<projectSchemaType> = useCallback(
    async (data) => {
      let success = false;
      setLoading(true);
      try {
        const description = data.description;
        const title = data.title;
        const projectImages = data.projectImages;
        const projectModels = data.projectModels;
        const projectVideos = data.projectVideos as Video[];

        await updateAddProject({
          description,
          title,
          projectImages,
          projectModels,
          projectVideos,
        });

        success = true;
        toast.success("Project Created Successfully");
      } catch (error) {
        toast.error("Something went wrong. Please try again.");
        console.log(JSON.stringify(error));
      }
      setLoading(false);
      return success;
    },

    [updateAddProject],
  );

  return { loading, onSubmit };
}
