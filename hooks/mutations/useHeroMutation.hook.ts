"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "@/lib/axios";

interface props {
  fullName: string;
  title: string;
  description: string;
  rightColor: string;
  leftColor: string;
}

export const useHeroMutation = () => {
  const queryClient = useQueryClient();
  const useHeroMutationFn = async ({
    fullName,
    title,
    description,
    rightColor,
    leftColor,
  }: props) => {
    const response = await axiosInstance.post("/api/admin/hero", {
      fullName,
      title,
      description,
      rightColor,
      leftColor,
    });
    return response;
  };

  return useMutation({
    mutationFn: useHeroMutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["hero"] });
    },
  });
};
