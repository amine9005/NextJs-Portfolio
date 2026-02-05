"use client";
// import { redirect } from "next/navigation";
import { useCallback, useState } from "react";
import { SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { useProjectMutation } from "@/hooks/mutations/useProjectMutation.hook";
import {
  projectImageSchemaType,
  projectModelSchemaType,
  projectSchemaType,
  projectSettingSchemaType,
  projectTextSchemaType,
  projectVideoSchemaType,
} from "@/validations/project.zod";
import { Video } from "@/types/project.types";
import { useAddProjectStore } from "@/store/admin/addProject.store";

let projectModels: string[] | undefined = [];

export function useProjectTextSubmit(nextStep: () => void) {
  const setTitle = useAddProjectStore((state) => state.setTitle);
  const setDescription = useAddProjectStore((state) => state.setDescription);

  const onSubmit: SubmitHandler<projectTextSchemaType> = useCallback(
    async (data) => {
      setTitle(data.title);
      setDescription(data.description);
      nextStep();
    },

    [nextStep, setTitle, setDescription],
  );

  return { onSubmit };
}

export function useProjectImagesSubmit(nextStep: () => void) {
  const setImages = useAddProjectStore((state) => state.setImages);
  const onSubmit: SubmitHandler<projectImageSchemaType> = useCallback(
    async (data) => {
      setImages(data.projectImages);
      nextStep();
    },

    [nextStep, setImages],
  );

  return { onSubmit };
}

export function useProjectVideosSubmit() {
  const setProjectVideos = useAddProjectStore(
    (state) => state.setProjectVideos,
  );
  const onSubmit: SubmitHandler<projectVideoSchemaType> = useCallback(
    async (data) => {
      setProjectVideos(data.projectVideos as Video[]);
    },

    [setProjectVideos],
  );

  return { onSubmit };
}

export function useProjectModelsSubmit() {
  const onSubmit: SubmitHandler<projectModelSchemaType> = useCallback(
    async (data) => {
      projectModels = data.projectModels;
    },

    [],
  );

  return { onSubmit };
}

export function useProjectSettingAndSubmit() {
  const [loading, setLoading] = useState(false);
  const { mutateAsync: updateAddProject } = useProjectMutation();
  const title = useAddProjectStore((state) => state.title) as string;
  const description = useAddProjectStore(
    (state) => state.description,
  ) as string;
  const projectImages = useAddProjectStore((state) => state.projectImages);
  const projectVideos = useAddProjectStore((state) => state.projectVideos);

  const onSubmit: SubmitHandler<projectSettingSchemaType> = useCallback(
    async (data) => {
      let success = false;
      setLoading(true);
      try {
        const isFeatured = data.isFeatured;
        const thumbnail = data.thumbnail;

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

    [updateAddProject, title, description, projectImages, projectVideos],
  );

  return { loading, onSubmit };
}

export function useProjectSubmit() {
  const [loading, setLoading] = useState(false);
  const { mutateAsync: updateAddProject } = useProjectMutation();

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
