"use client";
import { useImageUploadSubmit } from "@/hooks/submit/useImageUploadSubmit.hook";
import { useTmpLogoStore } from "@/store/admin/logo.store";
import { validateFiles } from "@/validations/upload.validate";
import { Loader2Icon, UploadIcon } from "lucide-react";
import { UseFormReturn } from "react-hook-form";

interface Props {
  index: number;
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: UseFormReturn<any>;
  text?: string;
  limit?: number;
}

const UploadImageInstantMolecule = ({
  index,
  form,
  name,
  text = "Chose File",
  limit,
}: Props) => {
  const { uploadImage, isPending } = useImageUploadSubmit();
  const setLogoPath = useTmpLogoStore((state) => state.setImagePath);

  const setAndUpload = async (files: FileList | null) => {
    const path = await uploadImage(files, "YES");
    console.log("path ", path);
    form.setValue(name, path);
    setLogoPath(path);
  };
  return (
    <label
      key={index}
      htmlFor={`image${index}`}
      className="flex flex-wrap overflow-x-hidden justify-center items-center gap-2 hover:cursor-pointer"
    >
      <input
        type="file"
        multiple
        onChange={(e) => setAndUpload(validateFiles(e.target.files, limit))}
        id={`image${index}`}
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
    </label>
  );
};

export default UploadImageInstantMolecule;
