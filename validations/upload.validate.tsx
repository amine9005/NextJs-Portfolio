import toast from "react-hot-toast";

export function validateFiles(files: FileList | null) {
  if (files && files.length > 0) {
    let totalSize = 0;
    for (let i = 0; i < files.length; i++) {
      totalSize += files[i].size;
      if (totalSize > 250 * 1024 * 1024) {
        return null;
      }
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
    "image/png",
    "image/jpg",
    "image/jpeg",
    "video/mp4",
    "video/vlc",
    "application/pdf",
    "application/docx",
    "application/x-compressed",
  ];
  const fileType = file.type;
  console.log("fileType: ", fileType);

  if (!fileTypes.includes(fileType)) {
    toast.error(
      "Invalid file type. Only Images, Videos, RAR, Zip, PDF, and DOCX are allowed.",
    );
    return null;
  } // 250MB limit
  if (file.size > 250 * 1024 * 1024) {
    toast.error("File is too large, Max file size is 250MB.");
    return null;
  }
  return file;
}
