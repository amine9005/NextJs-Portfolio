import Hero2Cols from "@/components/ui/layouts/hero/Hero2Cols.layout";
import HeroText from "@/components/ui/organisms/hero-text/HeroText.organism";
import HeroVideoMolecule from "@/components/ui/molecules/hero-video/HeroVideo.molecule";

const Hero2ColsAction = () => {
  return (
    <Hero2Cols
      cols={10}
      right_span={5}
      left_span={5}
      left_children={<HeroText />}
      right_children={<HeroVideoMolecule />}
    />
  );
};

export default Hero2ColsAction;
