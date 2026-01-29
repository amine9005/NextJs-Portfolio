"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "@/lib/axios";
import { Video } from "@/types/project.types";

interface props {
  title: string;
  description: string;
  projectImages: string[] | undefined;
  projectVideos: Video[] | undefined;
  projectModels: string[] | undefined;
}

export const useAddProjectMutation = () => {
  const queryClient = useQueryClient();
  const useAddProjectMutationFn = async ({
    projectImages,
    title,
    description,
    projectVideos,
    projectModels,
  }: props) => {
    const response = await axiosInstance.post("/api/admin/project/add", {
      projectImages,
      title,
      description,
      projectVideos,
      projectModels,
    });
    return response;
  };

  return useMutation({
    mutationFn: useAddProjectMutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["projects"] });
    },
  });
};
