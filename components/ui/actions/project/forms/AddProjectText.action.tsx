"use client";
import { memo, RefObject } from "react";
import { useProjectTextForm } from "@/hooks/forms/useProjectForm.hook";
import { useProjectTextSubmit } from "@/hooks/submit/useProjectSubmit.hook";
import AddProjectTextCard from "@/components/ui/organisms/cards/project/form/AddProjectText.card";
import { IStepperMethods } from "@/components/ui/atoms/stepper/Stepper.atom";

interface Props {
  stepperRef: RefObject<(HTMLDivElement & IStepperMethods) | null>;
}

const AddProjectTextAction = ({ stepperRef }: Props) => {
  const card = { title: "Add Project Details", description: "" };

  const form = useProjectTextForm();
  const formName = "addProjectText-Form";
  const { handleSubmit } = form;
  const { onSubmit } = useProjectTextSubmit(stepperRef);

  return (
    <AddProjectTextCard
      loading={false}
      form={form}
      card={card}
      formName={formName}
      handle_submit={handleSubmit(onSubmit)}
    />
  );
};

export default memo(AddProjectTextAction);
