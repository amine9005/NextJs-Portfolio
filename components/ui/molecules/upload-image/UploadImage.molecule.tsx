"use client";
import { validateFiles } from "@/validations/upload.validate";
import { UploadIcon } from "lucide-react";

interface Props {
  index: number;
  filePath: FileList | null;
  setFilePath: (files: FileList | null) => void;
}

const UploadImageMolecule = ({ index, filePath, setFilePath }: Props) => {
  return (
    <label
      key={index}
      htmlFor={`image${index}`}
      className="flex flex-wrap overflow-x-hidden justify-center items-center gap-2 hover:cursor-pointer"
    >
      <input
        type="file"
        multiple
        onChange={(e) => setFilePath(validateFiles(e.target.files))}
        id={`image${index}`}
        hidden
      />
      <UploadIcon className="h-12 w-20 p-2 hover:cursor-pointer border border-white rounded-lg" />
      <span className="max-w-full">
        {filePath && filePath.length !== 0
          ? filePath.length > 1
            ? `${filePath.length} Files Selected`
            : filePath.item(0)?.name
          : "Multiple File Upload"}
      </span>
    </label>
  );
};

export default UploadImageMolecule;
