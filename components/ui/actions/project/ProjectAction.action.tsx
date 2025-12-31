import ProjectCard from "@/components/ui/organisms/cards/project/ProjectCard.organism";
import { BlurFade } from "@/components/ui/Effects/blur-fade";

const ProjectsAction = () => {
  const images = [1, 2, 3];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-4 mt-15 sm:mt-0">
      {images.map((_, idx) => (
        <BlurFade key={idx} delay={0.3 + idx * 0.1} inView>
          <ProjectCard
            card={{
              title: "project",
              description: "This is a project description.",
            }}
          />
        </BlurFade>
      ))}
    </div>
  );
};

export default ProjectsAction;
