"use client";
import img1 from "@/images/productImage.png";
import img2 from "@/images/productImage2.png";
import img3 from "@/images/productImage3.png";
import img4 from "@/images/productImage4.png";
import { ImageStackCarousel } from "@/components/ui/Effects/AnimatedVerticalTestimonials";

const ProjectPageAction = () => {
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      src: img1,
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: img2,
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: img3,
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: img4,
    },
  ];
  return <ImageStackCarousel testimonials={testimonials} />;
};

export default ProjectPageAction;
