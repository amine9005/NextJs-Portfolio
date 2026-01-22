"use client";
import { FieldGroup } from "@/components/ui/atoms/field/field";
import InputField from "@/components/ui/molecules/input-field/InputField.molecule";
import { Controller } from "react-hook-form";
import { FormEvent } from "react";
import TextareaField from "@/components/ui/molecules/textarea-field/TextareaField.molecule";
import { ProjectFormType } from "@/validations/project.zod";
import UploadImagesArray from "@/components/ui/organisms/upload-image-array/UploadImageArray.organism";

interface Props {
  form: ProjectFormType;
  handle_submit: (formEvent: FormEvent) => void;
  formName: string;
}

const titleInputValues = {
  name: "title",
  labelTitle: "Title",
  type: "text",
  placeholder: "Project Title...",
  autoComplete: "off",
};
const descriptionInputValues = {
  name: "description",
  labelTitle: "Description",
  placeholder: "Describe the project...",
  autoComplete: "off",
  charLimits: 30,
};
const AddProjectContent = ({ form, formName, handle_submit }: Props) => {
  return (
    <form id={formName} onSubmit={handle_submit}>
      <FieldGroup>
        <Controller
          name="title"
          control={form?.control}
          render={({ field, fieldState }) => (
            <InputField
              field={field}
              fieldState={fieldState}
              item={titleInputValues}
            />
          )}
        />

        <Controller
          name="description"
          control={form?.control}
          render={({ field, fieldState }) => (
            <TextareaField
              field={field}
              fieldState={fieldState}
              item={descriptionInputValues}
            />
          )}
        />

        <UploadImagesArray form={form} name={"projectImages"} />
      </FieldGroup>
    </form>
  );
};

export default AddProjectContent;
