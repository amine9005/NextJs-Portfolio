"use client";
import { memo } from "react";
import FormLayout from "@/components/ui/layouts/Form.layout";
import AddProjectTextCard from "@/components/ui/organisms/cards/project/form/AddProjectText.card";
import {
  useProjectImageForm,
  useProjectTextForm,
} from "@/hooks/forms/useProjectForm.hook";
import {
  useProjectImagesSubmit,
  useProjectTextSubmit,
} from "@/hooks/submit/useProjectSubmit.hook";
import AddProjectImageCard from "../../organisms/cards/project/form/AddProjectImages.card";

const AddProjectAction = () => {
  const card = { title: "Add New Project", description: "" };

  const formText = useProjectTextForm();
  const formTextName = "addProjectText-Form";
  const { handleSubmit: handleTextSubmit } = formText;
  const { onSubmit: onTextSubmit } = useProjectTextSubmit();

  const formImage = useProjectImageForm();
  const formImageName = "addProjectImage-Form";
  const { handleSubmit: handleImagesSubmit } = formImage;
  const { onSubmit: onImagesSubmit } = useProjectImagesSubmit();

  return (
    <FormLayout>
      {" "}
      <AddProjectTextCard
        loading={false}
        form={formText}
        card={card}
        formName={formTextName}
        handle_submit={handleTextSubmit(onTextSubmit)}
      />
      <AddProjectImageCard
        loading={false}
        form={formImage}
        card={card}
        formName={formImageName}
        handle_submit={handleImagesSubmit(onImagesSubmit)}
      />
    </FormLayout>
  );
};

export default memo(AddProjectAction);
