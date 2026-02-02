"use client";
import { FieldGroup } from "@/components/ui/atoms/field/field";
import { FormEvent } from "react";
import { P } from "@/components/ui/atoms/text/Text";
import { ProjectSettingFormType } from "@/validations/project.zod";

interface Props {
  form: ProjectSettingFormType;
  handle_submit: (formEvent: FormEvent) => void;
  formName: string;
}

const AddProjectSettingsContent = ({
  form,
  formName,
  handle_submit,
}: Props) => {
  return (
    <form id={formName} onSubmit={handle_submit}>
      <FieldGroup>
        <div className="flex flex-col justify-center items-start">
          <P size={"sm"}>Project Settings</P>
        </div>
      </FieldGroup>
    </form>
  );
};

export default AddProjectSettingsContent;
