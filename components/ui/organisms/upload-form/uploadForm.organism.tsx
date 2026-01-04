"use client";
import { useForm } from "react-hook-form";
import { useUpload } from "@/hooks/useUpload.hook";
type UploadData = {
  file: FileList;
};
export default function UploadForm() {
  const { register, handleSubmit } = useForm<UploadData>();
  const { mutateAsync: upload, isPending } = useUpload();
  const onSubmit = async (data: UploadData) => {
    if (!data.file?.[0]) return;
    const res = await (await upload(data.file[0])).json();

    console.log(res.json());
  };
  return isPending ? (
    <div>Uploading...</div>
  ) : (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-2 mb-4">
        <label htmlFor="file">Picture</label>
        <input
          {...register("file")}
          type="file"
          accept="image/*"
          className="border border-gray-300 p-2 bg-gray-100 rounded-md cursor-pointer"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
        Upload
      </button>
    </form>
  );
}
