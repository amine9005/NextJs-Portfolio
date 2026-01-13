import { useUpload } from "@/hooks/mutations/useUpload.hook";

export function useImageUploadSubmit() {
  const { mutateAsync: upload, isPending } = useUpload();

  async function uploadImage(
    files: FileList | null,
    isLogo: "YES" | "NO" = "NO",
  ) {
    const fileUrls: string[] = [];

    if (files) {
      for (const file of files) {
        const response = await upload({ file: file, logo: isLogo });
        const { filename } = await response.json();
        fileUrls.push(filename);
      }
    }

    return fileUrls.length > 0 ? fileUrls[0] : null;
  }

  return { uploadImage, isPending };
}
