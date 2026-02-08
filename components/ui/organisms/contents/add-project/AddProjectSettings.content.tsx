"use client";
import { FieldGroup } from "@/components/ui/atoms/field/field";
import { FormEvent, useState } from "react";
import { P } from "@/components/ui/atoms/text/Text";
import {
  ProjectSettingFormType,
  ThumbnailType,
} from "@/validations/project.zod";
import { Controller } from "react-hook-form";
import SelectField from "@/components/ui/molecules/select-field/SelectField.molecule";
import DynamicSelectField from "@/components/ui/molecules/dynamic-select-field/DynamicSelectField.molecule";

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
  const [thumbnailOptions, setThumbnailOptions] = useState<string[]>(["empty"]);

  const thumbnailTypeInputValues = {
    name: `thumbnail.type`,
    labelTitle: "Thumbnail Type",
    options: ThumbnailType,
    placeholder: form.watch(`thumbnail.type`),
    form: form,
  };

  const updateThumbnailOptions = (value: string) => {
    console.log("updating thumbnail ", value);

    return [];
  };

  const fileOrUrlInputValues = {
    name: `thumbnail.fileOrUrl`,
    labelTitle: "Thumbnail File Or Url",
    options: [],

    placeholder: form.watch(`thumbnail.fileOrUrl`),
    form: form,
  };
  return (
    <form id={formName} onSubmit={handle_submit}>
      <FieldGroup>
        <div className="flex flex-col justify-center items-start">
          <P size={"sm"}>Project Settings</P>
          <div className="flex flex-col justify-center items-start w-full mt-5 space-y-3">
            <Controller
              name="thumbnail.type"
              control={form?.control}
              render={({ field, fieldState }) => (
                <SelectField
                  field={field}
                  fieldState={fieldState}
                  item={thumbnailTypeInputValues}
                  onSelectChange={(e) => updateThumbnailOptions(e)}
                />
              )}
            />
            <Controller
              name="thumbnail.fileOrUrl"
              control={form?.control}
              render={({ field, fieldState }) => (
                <DynamicSelectField
                  field={field}
                  fieldState={fieldState}
                  item={fileOrUrlInputValues}
                  values={thumbnailOptions}
                />
              )}
            />
          </div>
        </div>
      </FieldGroup>
    </form>
  );
};

export default AddProjectSettingsContent;
