"use client";
import { useMutation } from "@tanstack/react-query";

interface Props {
  file: File;
  logo: "YES" | "NO";
}

export const useUpload = () => {
  const uploadFn = async (props: Props) => {
    const formData = new FormData();
    formData.append("file", props.file);
    formData.append("logo", props.logo);
    const response = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });
    return response;
  };
  return useMutation({
    mutationFn: uploadFn,
  });
};
