"use client";
import BackgroundVideo from "next-video/background-video";
import awesomeVideo from "@/videos/sparkles-video-720.mp4";
import Player from "next-video/player";
import Video from "next-video";
import { motion } from "motion/react";
import BackgroundPlayer from "next-video/background-player";

const HeroVideoMolecule = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 0.3,
        delay: 0.6,
      }}
    >
      <BackgroundVideo
        className="rounded-lg bg-transparent w-auto sm:w-140 h-auto"
        preload="true"
        muted
        autoPlay={true}
        loop={true}
        src={awesomeVideo}
      ></BackgroundVideo>
    </motion.div>
    // <iframe
    //   className="rounded-lg bg-gray-300 object-cover w-auto sm:w-140 h-100"
    //   width={720}
    //   height={480}
    //   // src={`https://www.youtube.com/embed/${embedId}`}
    //   src={`https://drive.google.com/file/d/1Wiq0rwCcI23Bmt2NcRd87hdppXafVAhN/preview`}
    //   allowFullScreen
    //   title="Embedded Youtube Video"
    // />
  );
};

export default HeroVideoMolecule;
