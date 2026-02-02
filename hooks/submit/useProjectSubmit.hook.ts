"use client";
// import { redirect } from "next/navigation";
import { useCallback, useRef, useState } from "react";
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
import { IStepperMethods } from "@/components/ui/atoms/stepper/Stepper.atom";

let description = "";
let title = "";
let projectImages: string[] | undefined = [];
let projectModels: string[] | undefined = [];
let projectVideos: Video[] | undefined = [];

export function useProjectTextSubmit() {
  const stepperRef = useRef<HTMLDivElement & IStepperMethods>(null);
  const onSubmit: SubmitHandler<projectTextSchemaType> = useCallback(
    async (data) => {
      description = data.description;
      title = data.title;

      stepperRef.current?.nextStep();
    },

    [stepperRef],
  );

  return { onSubmit };
}

export function useProjectImagesSubmit() {
  const onSubmit: SubmitHandler<projectImageSchemaType> = useCallback(
    async (data) => {
      projectImages = data.projectImages;
    },

    [],
  );

  return { onSubmit };
}

export function useProjectVideosSubmit() {
  const onSubmit: SubmitHandler<projectVideoSchemaType> = useCallback(
    async (data) => {
      projectVideos = data.projectVideos as Video[];
    },

    [],
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

    [updateAddProject],
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
