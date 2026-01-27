"use client";
import { FieldGroup } from "@/components/ui/atoms/field/field";
import InputField from "@/components/ui/molecules/input-field/InputField.molecule";
import { Controller } from "react-hook-form";
import { FormEvent } from "react";
import TextareaField from "@/components/ui/molecules/textarea-field/TextareaField.molecule";
import { ProjectFormType } from "@/validations/project.zod";
import { P } from "@/components/ui/atoms/text/Text";
import { Separator } from "@/components/ui/atoms/separator/separator";

import UploadModelArray from "../../upload/upload-model-array/UploadModelArray.organism";
import UploadImageArray from "../../upload/upload-image-array/UploadImageArray.organism";
import UploadVideoArray from "../../upload/upload-video-array/UploadVideoArray.organism";

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
        <div className="flex flex-col justify-center items-start">
          <P size={"sm"}>Project Images</P>
          <UploadImageArray
            dirPath="/projects/images/"
            imageRoute="PROJECT IMAGE"
            form={form}
            name={"projectImages"}
          />
          <Separator className="mt-2" />
        </div>
        <div className="flex flex-col justify-center items-start">
          <P size={"sm"} className="mb-3">
            Project Videos
          </P>
          <UploadVideoArray name="projectVideos" form={form} />
          <Separator className="mt-2" />
        </div>
        <div className="flex flex-col justify-center items-start">
          <P size={"sm"}>Project Models</P>
          <UploadModelArray
            uploadRoute="3D MODEL"
            form={form}
            name={"projectModels"}
          />
          <Separator className="mt-2" />
        </div>
      </FieldGroup>
    </form>
  );
};

export default AddProjectContent;
