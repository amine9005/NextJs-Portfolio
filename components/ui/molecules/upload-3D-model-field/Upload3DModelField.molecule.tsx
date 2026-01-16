"use client";
import { useImageUploadSubmit } from "@/hooks/submit/useImageUploadSubmit.hook";
import { validateFiles } from "@/validations/upload.validate";
import { Loader2Icon, UploadIcon } from "lucide-react";
import { FieldValues, UseFormReturn } from "react-hook-form";
import {
  Field,
  FieldError,
  FieldLabel,
} from "@/components/ui/atoms/field/field";

// interface Item {
//   name: string;
//   labelTitle?: React.ReactNode;
//   type?: string;
//   placeholder?: string;
//   autoComplete: string;
// }
interface Props {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: UseFormReturn<any>;
  text?: string;
  // item?: Item;
  limit?: number;
  field: FieldValues;
  fieldState: {
    invalid: boolean;
    isTouched: boolean;
    isDirty: boolean;
    isValidating: boolean;
    error?: { message?: string | undefined } | undefined;
  };
}

const Upload3DModelField = ({
  form,
  name,
  text = "Upload 3D Model",
  limit,
  fieldState,
}: Props) => {
  const { uploadImage, isPending } = useImageUploadSubmit();

  const setAndUpload = async (files: FileList | null) => {
    const path = await uploadImage(files, "YES");
    // console.log("path ", path);
    form.setValue(name, path);
    form.trigger();
  };
  return (
    <Field className="w-full" data-invalid={fieldState.invalid}>
      <FieldLabel
        className="flex w-full flex-wrap overflow-x-hidden justify-start items-center gap-2 hover:cursor-pointer"
        htmlFor={`image-${name}`}
      >
        <input
          type="file"
          multiple
          onChange={(e) => setAndUpload(validateFiles(e.target.files, limit))}
          id={`image-${name}`}
          hidden
          disabled={isPending}
        />
        {isPending ? (
          <div className="flex items-center justify-center h-10 w-16 p-2 hover:cursor-pointer border border-white rounded-lg">
            <Loader2Icon className=" animate-spin" />
          </div>
        ) : (
          <UploadIcon className="h-10 w-16 p-2 hover:cursor-pointer border border-white rounded-lg" />
        )}
        <span className="max-w-full">
          {form.getValues(name) ? form.getValues(name) : text}
        </span>
      </FieldLabel>

      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  );
};

export default Upload3DModelField;
