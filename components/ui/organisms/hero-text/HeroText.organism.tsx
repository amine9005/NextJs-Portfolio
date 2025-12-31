"use client";
import { H2 } from "@/components/ui/atoms/heading/heading2";
import { P } from "@/components/ui/atoms/text/Text";
import { motion } from "motion/react";

const HeroText = () => {
  return (
    <div className="max-w-xl">
      <H2 size={"4xl"}>
        {"Full Name - ".split(" ").map((word, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{
              duration: 0.3,
              delay: index * 0.1,
              ease: "easeInOut",
            }}
            className="mr-2 inline-block"
          >
            {word}
          </motion.span>
        ))}

        <motion.span
          initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{
            duration: 0.1,
            delay: 0.3,
            ease: "easeInOut",
          }}
          className="mr-2 inline-block text-transparent bg-clip-text bg-linear-to-r from-purple-500 to bg-yellow-400"
        >
          {"3D Developer"}
        </motion.span>
      </H2>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.3,
          delay: 0.5,
        }}
      >
        <P size={"lg"} className="dark mt-10">
          I&apos;m a Blender 3D developer, animator and creator. I specialize in
          creating high-quality 3D models for games,Youtube, movies, and other
          projects.
        </P>
      </motion.div>
    </div>
  );
};

export default HeroText;
