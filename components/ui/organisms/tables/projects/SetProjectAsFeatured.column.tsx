import { Checkbox } from "@/components/ui/atoms/checkbox/checkbox";
import { Label } from "@/components/ui/atoms/label/label";
import { useProjectMutation } from "@/hooks/mutations/useProjectMutation.hook";
import { projectSchemaType } from "@/validations/project.zod";
import { Video } from "@/types/project.types";
import { ReactNode, useState } from "react";
interface Props {
  labelTitle: string | ReactNode;
  className?: string;
  checkFor: string;
  checkClassName?: string;
  checked?: boolean;
  project: projectSchemaType;
}

const SetProjectAsFeaturedColumn = ({
  className,
  checkClassName,
  labelTitle,
  checked = false,
  checkFor,
  project,
}: Props) => {
  const [isChecked, setIsChecked] = useState<boolean>(checked);
  const { mutateAsync: updateProject } = useProjectMutation();

  const handleFeatured = async () => {
    const id = project._id;
    const projectImages = project.projectImages;
    const title = project.title;
    const description = project.description;
    const projectVideos = project.projectVideos as Video[];
    const projectModels = project.projectModels;
    const isFeatured = !isChecked;
    const thumbnail = project.thumbnail;
    setIsChecked(isFeatured);

    await updateProject({
      id,
      projectImages,
      title,
      description,
      projectVideos,
      projectModels,
      isFeatured,
      thumbnail,
    });

    console.log("updated project");
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Checkbox
        className={checkClassName}
        checked={isChecked}
        id={checkFor}
        onClick={() => {
          handleFeatured();
        }}
      />
      <Label className="hover:cursor-pointer" htmlFor={checkFor}>
        {labelTitle}
      </Label>
    </div>
  );
};

export default SetProjectAsFeaturedColumn;
