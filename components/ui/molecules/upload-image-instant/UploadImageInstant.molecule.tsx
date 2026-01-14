"use client";
import { useImageUploadSubmit } from "@/hooks/submit/useImageUploadSubmit.hook";
import { useTmpLogoStore } from "@/store/admin/logo.store";
import { validateFiles } from "@/validations/upload.validate";
import { Loader2Icon, UploadIcon } from "lucide-react";
import { FieldValues, UseFormReturn } from "react-hook-form";
import {
  Field,
  FieldError,
  FieldLabel,
} from "@/components/ui/atoms/field/field";
import { Input } from "@/components/ui/atoms/input/input";

interface Item {
  name: string;
  labelTitle?: React.ReactNode;
  type?: string;
  placeholder?: string;
  autoComplete: string;
}
interface Props {
  index: number;
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: UseFormReturn<any>;
  text?: string;
  item?: Item;
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

const UploadImageInstantMolecule = ({
  index,
  form,
  name,
  text = "Chose File",
  limit,
  item,
  fieldState,
}: Props) => {
  const { uploadImage, isPending } = useImageUploadSubmit();
  const setLogoPath = useTmpLogoStore((state) => state.setImagePath);

  const setAndUpload = async (files: FileList | null) => {
    const path = await uploadImage(files, "YES");
    console.log("path ", path);
    form.setValue(name, path);
    setLogoPath(path);
    form.trigger();
  };
  return (
    <Field className="w-full" data-invalid={fieldState.invalid}>
      <FieldLabel
        className="flex w-full flex-wrap overflow-x-hidden justify-start items-center gap-2 hover:cursor-pointer"
        key={index}
        htmlFor={`image-${index}`}
      >
        <input
          type="file"
          multiple
          onChange={(e) => setAndUpload(validateFiles(e.target.files, limit))}
          id={`image-${index}`}
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

export default UploadImageInstantMolecule;
