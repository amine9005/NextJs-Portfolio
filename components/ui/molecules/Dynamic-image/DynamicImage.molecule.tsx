// src/components/DynamicImage.js
"use client"; // Mark as client component (required for Suspense/state)

import { Suspense } from "react";
import AsyncImage from "@/components/ui/molecules/async-image/AsyncImage.molecule";

interface asyncImageProps {
  folder: string; // Folder where the image is located
  imageName: string; // Name of the image file
  alt: string; // Alternative text for the image
  width: number; // Width of the image
  height: number; // Height of the image
  className?: string; // Additional CSS class for styling the image
}

// Component to load the image asynchronously

// Wrapper with Suspense for loading state
export default function DynamicImage({
  folder,
  imageName,
  alt,
  width,
  height,
  className,
}: asyncImageProps) {
  return (
    <Suspense
      fallback={
        <div
          className="bg-gray-600 animate-pulse rounded-lg mr-3"
          style={{ width, height }}
        />
      }
    >
      <AsyncImage
        className={className}
        folder={folder}
        imageName={imageName}
        alt={alt}
        width={width}
        height={height}
      />
    </Suspense>
  );
}
