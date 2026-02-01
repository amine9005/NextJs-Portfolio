"use client";
import { FieldGroup } from "@/components/ui/atoms/field/field";
import { FormEvent } from "react";
import { P } from "@/components/ui/atoms/text/Text";
import { ProjectVideoFormType } from "@/validations/project.zod";
import UploadVideoArray from "@/components/ui/organisms/upload/upload-video-array/UploadVideoArray.organism";

interface Props {
  form: ProjectVideoFormType;
  handle_submit: (formEvent: FormEvent) => void;
  formName: string;
}

const AddProjectVideoContent = ({ form, formName, handle_submit }: Props) => {
  return (
    <form id={formName} onSubmit={handle_submit}>
      <FieldGroup>
        <div className="flex flex-col justify-center items-start">
          <P size={"sm"} className="mb-3">
            Project Videos
          </P>
          <UploadVideoArray name="projectVideos" form={form} />
        </div>
      </FieldGroup>
    </form>
  );
};

export default AddProjectVideoContent;
