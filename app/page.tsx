import ContactMeAction from "@/components/ui/actions/forms/contact/ContactMe.action";
import Hero2ColsAction from "@/components/ui/actions/hero/Hero2Cols.action";
import ProjectsAction from "@/components/ui/actions/project/ProjectsSection.action";
import { H2 } from "@/components/ui/atoms/heading/heading2";
import { BlurFade } from "@/components/ui/Effects/blur-fade";
import GeneralLayout from "@/components/ui/layouts/GeneralLayout.layout";
import Footer1Organism from "@/components/ui/organisms/footers/Footer1.organism";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center">
      <Hero2ColsAction />
      <GeneralLayout>
        <BlurFade onlyOnce={false} inView className="w-full" delay={0}>
          <H2 className="text-center mb-10" size={"3xl"}>
            My Recent Projects
          </H2>
        </BlurFade>
        <ProjectsAction />
      </GeneralLayout>

      <GeneralLayout>
        <BlurFade onlyOnce={false} inView className="w-full" delay={0}>
          <H2 className="text-center mb-10" size={"3xl"}>
            Let&apos;s Get In Touch
          </H2>
        </BlurFade>
        <BlurFade
          onlyOnce={false}
          inView
          className="flex flex-col w-full justify-center items-center p-4"
          delay={0.3}
        >
          <ContactMeAction />
        </BlurFade>
      </GeneralLayout>

      <Footer1Organism />
    </main>
  );
}
