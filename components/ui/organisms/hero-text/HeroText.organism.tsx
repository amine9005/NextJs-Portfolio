import { H2 } from "@/components/ui/atoms/heading/heading2";
import { P } from "@/components/ui/atoms/text/Text";
import { BlurFade } from "@/components/ui/Effects/blur-fade";

const HeroText = () => {
  const fullName = "Full Name " + "- ";
  const FullNameDelay = fullName.split(" ").length * 0.1;
  const titleLeftColor = "from-purple-500";
  const titleRightColor = "to-yellow-400";

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
          className={
            `mr-2 inline-block text-transparent bg-clip-text bg-linear-to-r ` +
            titleLeftColor +
            " " +
            titleRightColor
          }
          onlyOnce={false}
          delay={FullNameDelay}
          inView
        >
          {"3D Developer"}
        </BlurFade>
      </H2>
      <BlurFade inView onlyOnce={false} delay={FullNameDelay + 0.2}>
        <P size={"lg"} className="dark mt-10">
          I&apos;m a Blender 3D developer, animator and creator. I specialize in
          creating high-quality 3D models for games,Youtube, movies, and other
          projects.
        </P>
      </BlurFade>
    </div>
  );
};

export default HeroText;
