"use client";
import { memo } from "react";
import { useProjectImageForm } from "@/hooks/forms/useProjectForm.hook";
import { useProjectImagesSubmit } from "@/hooks/submit/useProjectSubmit.hook";
import AddProjectImageCard from "@/components/ui/organisms/cards/project/form/AddProjectImages.card";
interface Props {
  nextStep: () => void;
  previousStep: () => void;
}
const AddProjectImagesAction = ({ nextStep, previousStep }: Props) => {
  const card = { title: "Add New Project", description: "" };

  const form = useProjectImageForm();
  const formName = "addProjectImage-Form";
  const { handleSubmit: handleImagesSubmit } = form;
  const { onSubmit: onImagesSubmit } = useProjectImagesSubmit(nextStep);

  return (
    <AddProjectImageCard
      loading={false}
      previousStep={previousStep}
      form={form}
      card={card}
      formName={formName}
      handle_submit={handleImagesSubmit(onImagesSubmit)}
    />
  );
};

export default memo(AddProjectImagesAction);
