"use client";
import { useTmpLogoStore } from "@/store/admin/logo.store";
import { validateFiles } from "@/validations/upload.validate";
import { Loader2Icon, UploadIcon } from "lucide-react";
import { FieldValues, UseFormReturn } from "react-hook-form";
import {
  Field,
  FieldError,
  FieldLabel,
} from "@/components/ui/atoms/field/field";
import { useUploadSubmit } from "@/hooks/submit/useUploadSubmit.hook";

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

const UploadFileFieldInstant = ({
  form,
  name,
  text = "Chose File",
  limit,
  fieldState,
}: Props) => {
  const { uploadFile, isPending } = useUploadSubmit();
  const setLogoPath = useTmpLogoStore((state) => state.setImagePath);

  const setAndUpload = async (files: FileList | null) => {
    const path = await uploadFile(files, "LOGO");
    // console.log("path ", path);
    form.setValue(name, path);
    setLogoPath(path);
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

export default UploadFileFieldInstant;
