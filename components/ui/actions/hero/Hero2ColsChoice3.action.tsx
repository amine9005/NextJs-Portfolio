import Hero2Cols from "@/components/ui/layouts/hero/Hero2Cols.layout";
import HeroText from "@/components/ui/organisms/hero-text/HeroText.organism";
import Hero3DModelMolecule from "@/components/ui/molecules/hero-3d-model/Hero3DModel.molecule";

const Hero2ColsAction = () => {
  return (
    <Hero2Cols
      cols={10}
      right_span={5}
      left_span={5}
      left_children={<HeroText />}
      right_children={<Hero3DModelMolecule />}
    />
  );
};

export default Hero2ColsAction;
