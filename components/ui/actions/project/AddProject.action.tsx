"use client";
import { memo } from "react";
import FormLayout from "@/components/ui/layouts/Form.layout";
import AddProjectCard from "@/components/ui/organisms/cards/project/AddProject.card";
import { useAddProjectForm } from "@/hooks/forms/useAddProjectForm.hook";
import { useAddProjectSubmit } from "@/hooks/submit/useAddProjectSubmit.hook";

const AddProjectAction = () => {
  const form = useAddProjectForm();

  const { handleSubmit } = form;
  const { onSubmit, loading } = useAddProjectSubmit();

  const card = { title: "Add New Project", description: "" };
  const formName = "addProject-Form";

  return (
    <FormLayout>
      {" "}
      <AddProjectCard
        loading={loading}
        form={form}
        card={card}
        formName={formName}
        handle_submit={handleSubmit(onSubmit)}
      />
    </FormLayout>
  );
};

export default memo(AddProjectAction);
