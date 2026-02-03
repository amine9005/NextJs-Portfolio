"use client";
import { memo, RefObject } from "react";
import { useProjectImageForm } from "@/hooks/forms/useProjectForm.hook";
import { useProjectImagesSubmit } from "@/hooks/submit/useProjectSubmit.hook";
import AddProjectImageCard from "@/components/ui/organisms/cards/project/form/AddProjectImages.card";
import { IStepperMethods } from "@/components/ui/atoms/stepper/Stepper.atom";
interface Props {
  stepperRef: RefObject<(HTMLDivElement & IStepperMethods) | null>;
}
const AddProjectImagesAction = ({ stepperRef }: Props) => {
  const card = { title: "Add New Project", description: "" };

  const form = useProjectImageForm();
  const formName = "addProjectImage-Form";
  const { handleSubmit: handleImagesSubmit } = form;
  const { onSubmit: onImagesSubmit } = useProjectImagesSubmit(stepperRef);

  return (
    <AddProjectImageCard
      loading={false}
      stepperRef={stepperRef}
      form={form}
      card={card}
      formName={formName}
      handle_submit={handleImagesSubmit(onImagesSubmit)}
    />
  );
};

export default memo(AddProjectImagesAction);
