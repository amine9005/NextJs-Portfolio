"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "@/lib/axios";
import { Video } from "@/types/project.types";

interface props {
  id?: string;
  title: string;
  description: string;
  projectImages: string[] | undefined;
  projectVideos: Video[] | undefined;
  projectModels: string[] | undefined;
  isFeatured: boolean;
  thumbnail: { type: string; source: string; fileOrUrl: string };
}

export const useProjectMutation = () => {
  const queryClient = useQueryClient();
  const useProjectMutationFn = async ({
    projectImages,
    title,
    description,
    projectVideos,
    projectModels,
    isFeatured,
    thumbnail,
  }: props) => {
    const response = await axiosInstance.post("/api/admin/project/add", {
      projectImages,
      title,
      description,
      projectVideos,
      projectModels,
      isFeatured,
      thumbnail,
    });
    return response;
  };

  return useMutation({
    mutationFn: useProjectMutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["projects"] });
    },
  });
};
