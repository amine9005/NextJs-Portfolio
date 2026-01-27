"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "@/lib/axios";

interface props {
  title: string;
  description: string;
  projectImages: string[] | undefined;
  projectVideos: string[] | undefined;
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
