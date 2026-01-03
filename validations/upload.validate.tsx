import toast from "react-hot-toast";

export function validateFiles(files: FileList | null) {
  if (files && files.length > 0 && files.length <= 5) {
    for (let i = 0; i < files.length; i++) {
      if (!validateFile(files[i])) {
        return null;
      }
    }
    return files;
  }
  return null;
}

export function validateFile(file: File | null) {
  if (!file) {
    return null;
  }
  const fileTypes = [
    "image/jpeg",
    "image/png",
    "application/pdf",
    "application/docx",
  ];
  const fileType = file.type;

  if (!fileTypes.includes(fileType)) {
    toast.error(
      "Invalid file type. Only JPEG, PNG, PDF, and DOCX are allowed.",
    );
    return null;
  } // 5MB limit
  if (file.size > 5 * 1024 * 1024) {
    toast.error("File is too large, Max file size is 5MB.");
    return null;
  }
  return file;
}
