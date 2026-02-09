"use client";
import { useProjectSettingForm } from "@/hooks/forms/useProjectForm.hook";
import { useProjectSettingAndSubmit } from "@/hooks/submit/useProjectSubmit.hook";
import AddProjectSettingsCard from "@/components/ui/organisms/cards/project/form/AddProjectSettings.card";

interface Props {
  nextStep: () => void;
  previousStep: () => void;
}

const AddProjectSettingsAction = ({ nextStep, previousStep }: Props) => {
  const card = { title: "Set Project Settings", description: "" };

  const form = useProjectSettingForm();
  const formName = "addProjectSetting-Form";
  const { handleSubmit } = form;
  const { onSubmit } = useProjectSettingAndSubmit(nextStep);

  return (
    <AddProjectSettingsCard
      loading={false}
      form={form}
      card={card}
      previousStep={previousStep}
      formName={formName}
      handle_submit={handleSubmit(onSubmit)}
    />
  );
};

export default AddProjectSettingsAction;
