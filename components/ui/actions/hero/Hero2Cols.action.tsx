import Hero2Cols from "@/components/ui/layouts/hero/Hero2Cols.layout";
import HeroText from "@/components/ui/organisms/hero-text/HeroText.organism";
import HeroImage from "@/components/ui/molecules/hero-image/HeroImage.molecule";

const Hero2ColsAction = () => {
  return (
    <Hero2Cols
      cols={10}
      right_span={5}
      left_span={5}
      left_children={<HeroText />}
      right_children={<HeroImage />}
    />
  );
};

export default Hero2ColsAction;
