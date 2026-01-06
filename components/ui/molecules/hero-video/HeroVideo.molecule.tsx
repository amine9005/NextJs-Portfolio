"use client";
import { motion } from "motion/react";

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
      <video
        className="rounded-lg bg-transparent w-full md:w-160 h-80 p-4"
        preload="true"
        controls={false}
        muted
        autoPlay={true}
        loop={true}
        src={
          "https://stream.mux.com/Uj3xQat00Dsg8023Y01IKzYBlTnnp567ad5ZLQ2c00hZlOs.m3u8"
        }
      ></video>
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
