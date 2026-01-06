import Hero2ColsAction from "@/components/ui/actions/hero/Hero2ColsChoice2.action";
import ProjectsAction from "@/components/ui/actions/project/ProjectsSection.action";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center">
      <Hero2ColsAction />
      <ProjectsAction />
    </main>
  );
}
