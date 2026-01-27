"use client";
import { useHeroMediaQuery } from "@/hooks/queries/useHeroMediaQuery.hook";
import Skeleton from "react-loading-skeleton";
import HeroParallax from "@/components/ui/molecules/hero-parallax-image/HeroParallaxImage.molecule";
import HeroVideoMolecule from "@/components/ui/molecules/hero-video/HeroVideo.molecule";
import Hero3DModelMolecule from "@/components/ui/molecules/hero-3d-model/Hero3DModel.molecule";
import HeroImage from "@/components/ui/molecules/hero-image/HeroImage.molecule";

const HeroMediaDisplayOrganism = () => {
  const { data: heroData, isLoading } = useHeroMediaQuery();

  if (isLoading) {
    return (
      <div className="w-auto sm:w-140 h-auto">
        <Skeleton width={"100%"} height={300} />{" "}
      </div>
    );
  }

  const {
    displayType,
    videoSource,
    imageUrl,
    videoUrl,
    model3D_Url,
    videoFileName,
  } = heroData;

  if (displayType === "Image") {
    return <HeroImage imageUrl={imageUrl} />;
  } else if (displayType === "Parallax") {
    return <HeroParallax imageUrl={imageUrl} />;
  } else if (displayType === "Video") {
    return (
      <HeroVideoMolecule
        videoSource={videoSource}
        videoUrl={videoUrl}
        videoFileName={videoFileName}
      />
    );
  } else if (displayType === "3D Model") {
    return <Hero3DModelMolecule modelName={model3D_Url} />;
  }

  return <div>Something went wrong no hero media provided</div>;
};

export default HeroMediaDisplayOrganism;
