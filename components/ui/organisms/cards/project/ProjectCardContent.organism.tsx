import { P } from "@/components/ui/atoms/text/Text";
import Image from "next/image";

const ProjectCardContent = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <Image
        className="relative w-full bg-gray-400 object-cover  rounded-lg"
        src={"/project.png"}
        alt="project image"
        width={240}
        height={360}
      />
      <P className="line-clamp-3">
        Project description goes here. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Similique obcaecati possimus animi distinctio,
        eligendi, nulla optio quam beatae officia maiores voluptate veniam!
        Reprehenderit nesciunt natus iusto ex laudantium perferendis
        accusantium!
      </P>
    </div>
  );
};

export default ProjectCardContent;
