"use client";
import { useMutation } from "@tanstack/react-query";
import axiosInstance from "@/lib/axios";

interface props {
  fullName: string;
  imagePath: string | null;
  useImage: boolean;
}

export const useLogoMutation = () => {
  const useLogoMutationFn = async ({
    fullName,
    imagePath,
    useImage,
  }: props) => {
    const response = await axiosInstance.post("/api/admin/logo", {
      fullName,
      imagePath,
      useImage,
    });
    return response;
  };

  return useMutation({
    mutationFn: useLogoMutationFn,
  });
};
