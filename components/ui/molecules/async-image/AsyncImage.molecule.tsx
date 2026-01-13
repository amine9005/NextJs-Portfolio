"use client";
import Image from "next/image";
import { ImageImporter } from "@/helpers/ImageImporter.molecule";
import { useEffect, useState } from "react";

interface asyncImageProps {
  folder: string; // Folder where the image is located
  imageName: string; // Name of the image file
  alt: string; // Alternative text for the image
  width: number; // Width of the image
  height: number; // Height of the image
  className?: string; // Additional CSS class for styling the image
}

const AsyncImage = ({
  folder,
  imageName,
  alt,
  width,
  height,
  className,
}: asyncImageProps) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [imageUrl, setImageUrl] = useState<any>(null);

  useEffect(() => {
    async function getImage(folder: string, imageName: string) {
      const url = await ImageImporter(folder, imageName);
      setImageUrl(url);
    }

    getImage(folder, imageName);
  });
  return (
    <Image
      src={imageUrl}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  );
};

export default AsyncImage;
