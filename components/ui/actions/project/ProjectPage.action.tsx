"use client";
import img1 from "/images/productImage.png";
import img2 from "/images/productImage2.png";
import img3 from "/images/productImage3.png";
import { ImageStackCarousel } from "@/components/ui/Effects/ImageStackCarousel";
import Image from "next/image";
import { motion } from "motion/react";

const ProjectPageAction = () => {
  const testimonials = [
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      node: (
        <video
          className="rounded-lg bg-transparent h-full w-full"
          preload="true"
          controls={true}
          muted
          autoPlay={false}
          loop={false}
          src={
            "https://stream.mux.com/Uj3xQat00Dsg8023Y01IKzYBlTnnp567ad5ZLQ2c00hZlOs.m3u8"
          }
        ></video>
      ),
    },
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      node: (
        <Image
          src={img1}
          alt={"Sarah Chen"}
          width={1080}
          height={720}
          draggable={false}
          className="h-full w-full rounded-3xl object-cover object-center"
        />
      ),
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      node: (
        <Image
          src={img2}
          alt={"Michael Rodriguez"}
          width={1080}
          height={720}
          draggable={false}
          className="h-full w-full rounded-3xl object-cover object-center"
        />
      ),
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      node: (
        <Image
          src={img3}
          alt={"Emily Watson"}
          width={1080}
          height={720}
          draggable={false}
          className="h-full w-full rounded-3xl object-cover object-center"
        />
      ),
    },
  ];
  return (
    <div className="mx-auto w-full max-w-sm px-4 py-20 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12">
      <div className="w-full grid grid-cols-1 gap-20">
        <ImageStackCarousel stack={testimonials} />
        <div className="flex w-full flex-col justify-between py-4">
          <motion.div
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <h3 className="text-2xl font-bold text-black dark:text-white">
              Project Title
            </h3>
            <p className="text-sm text-gray-500 dark:text-neutral-500">
              Project Sub Title
            </p>
            <motion.p className="mt-8 text-lg text-gray-500 dark:text-neutral-300">
              {"Project Description".split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPageAction;
