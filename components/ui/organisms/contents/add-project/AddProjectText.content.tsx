"use client";
import { FieldGroup } from "@/components/ui/atoms/field/field";
import InputField from "@/components/ui/molecules/input-field/InputField.molecule";
import { Controller } from "react-hook-form";
import { FormEvent, useState } from "react";
import TextareaField from "@/components/ui/molecules/textarea-field/TextareaField.molecule";
import { ProjectTextFormType, ThumbnailType } from "@/validations/project.zod";
import { P } from "@/components/ui/atoms/text/Text";
import { Separator } from "@/components/ui/atoms/separator/separator";
import UploadModelArray from "@/components/ui/organisms/upload/upload-model-array/UploadModelArray.organism";
import UploadImageArray from "@/components/ui/organisms/upload/upload-image-array/UploadImageArray.organism";
import UploadVideoArray from "@/components/ui/organisms/upload/upload-video-array/UploadVideoArray.organism";
import SelectField from "@/components/ui/molecules/select-field/SelectField.molecule";
import DynamicSelectField from "@/components/ui/molecules/dynamic-select-field/DynamicSelectField.molecule";
import { Button } from "@/components/ui/atoms/button/button";

interface Props {
  form: ProjectTextFormType;
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
const AddProjectTextContent = ({ form, formName, handle_submit }: Props) => {
  // const [thumbnailOptions, setThumbnailOptions] = useState<string[]>(["empty"]);

  // const thumbnailTypeInputValues = {
  //   name: `thumbnail.type`,
  //   labelTitle: "Thumbnail Type",
  //   options: ThumbnailType,
  //   placeholder: form.watch(`thumbnail.type`),
  //   form: form,
  // };

  // const updateThumbnailOptions = (value: string) => {
  //   console.log("updating thumbnail ", value);
  //   if (value === "Models") {
  //     const models = form.getValues("projectModels")?.map((value) => {
  //       if (value === typeof "") {
  //         return value;
  //       }
  //     });
  //     setThumbnailOptions(models as string[]);
  //   } else if (value === "Images") {
  //     const images = form.getValues("projectImages")?.map((value) => {
  //       if (value === typeof "") {
  //         return value;
  //       }
  //     });
  //     setThumbnailOptions(images as string[]);
  //   }
  //   // else if (thumbnailSource === "projectVideos") {
  //   //   return form.getValues("projectVideos");
  //   // }
  //   return [];
  // };

  // const fileOrUrlInputValues = {
  //   name: `thumbnail.fileOrUrl`,
  //   labelTitle: "Thumbnail File Or Url",
  //   options: form.watch("projectImages") as string[],

  //   placeholder: form.watch(`thumbnail.fileOrUrl`),
  //   form: form,
  // };
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
        {/* <div className="flex flex-col justify-center items-start">
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
        <div className="flex flex-col justify-center items-start">
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
        </div> */}
      </FieldGroup>
    </form>
  );
};

export default AddProjectTextContent;
