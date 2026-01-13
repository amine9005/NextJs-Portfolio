export const ImageImporter = async (folder: string, imageName: string) => {
  try {
    // Construct the dynamic path: ../chapters/[chapterId]/images/[imageName]
    const imageSrc = await import(`@/uploads/${folder}/${imageName}`);
    return imageSrc.default; // Image URL is in the default export
  } catch (error) {
    console.error(
      `Failed to load image ${imageName} form folder ${folder}:`,
      error,
    );
    // Fallback to a placeholder image (imported statically)
    const fallback = await import("@/public/file.svg");
    return fallback.default;
  }
};
