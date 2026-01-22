"use client";
import { memo } from "react";
import FormLayout from "@/components/ui/layouts/Form.layout";
import { useLogoSubmit } from "@/hooks/submit/useLogoSubmit.hook";
import AddProjectCard from "@/components/ui/organisms/cards/project/AddProject.card";
import { useAddProjectForm } from "@/hooks/forms/useAddProjectForm.hook";

const AddProjectAction = () => {
  const form = useAddProjectForm();

  const { handleSubmit } = form;
  const { onSubmit, loading } = useLogoSubmit();

  const card = { title: "Add New Project", description: "" };
  const formName = "TitleAndLogo-Form";

  return (
    <FormLayout>
      {" "}
      <AddProjectCard
        loading={loading}
        form={form}
        card={card}
        formName={formName}
        handle_submit={() => {}}
      />
    </FormLayout>
  );
};

export default memo(AddProjectAction);
