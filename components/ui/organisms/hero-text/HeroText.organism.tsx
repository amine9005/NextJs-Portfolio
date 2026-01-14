"use client";
import { H2 } from "@/components/ui/atoms/heading/heading2";
import { P } from "@/components/ui/atoms/text/Text";
import { BlurFade } from "@/components/ui/Effects/blur-fade";
import { useHeroQuery } from "@/hooks/queries/useHeroQuery.hook";
import { CSSProperties } from "react";
import Skeleton from "react-loading-skeleton";

const HeroText = () => {
  const { data: heroData, isLoading } = useHeroQuery();

  if (isLoading) {
    return (
      <div className="max-w-xl w-full text-center lg:text-start space-y-8">
        <div className="w-full grid grid-cols-2 gap-8">
          <Skeleton width={"100%"} height={40} />
          <Skeleton width={"100%"} height={40} />
        </div>
        <Skeleton width={"100%"} height={200} className="rounded-lg" />
      </div>
    );
  }

  const { leftColor, rightColor, title, description } = heroData;

  const fullName = heroData?.fullName + " - ";
  const FullNameDelay = fullName.split(" ").length * 0.1;

  const titleStyle: CSSProperties = {
    marginRight: "8px",
    display: "inline-block",
    color: "transparent",
    backgroundClip: "text",
    backgroundImage: `linear-gradient(0.25turn, ${leftColor},  ${rightColor})`,
  };

  return (
    <div className="max-w-xl text-center lg:text-start">
      <H2 size={"4xl"}>
        {fullName.split(" ").map((word, index) => (
          <BlurFade
            className="mr-2 inline-block"
            key={index}
            inView
            onlyOnce={false}
            delay={index * 0.1}
          >
            {word}
          </BlurFade>
        ))}

        <BlurFade
          style={titleStyle}
          onlyOnce={false}
          delay={FullNameDelay}
          inView
        >
          {title}
        </BlurFade>
      </H2>
      <BlurFade inView onlyOnce={false} delay={FullNameDelay + 0.2}>
        <P size={"lg"} className="dark mt-10">
          {description}
        </P>
      </BlurFade>
    </div>
  );
};

export default HeroText;
