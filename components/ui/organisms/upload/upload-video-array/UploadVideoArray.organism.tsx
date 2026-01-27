import { Button } from "@/components/ui/atoms/button/button";
import { PlusIcon, Trash2Icon } from "lucide-react";
import { Controller, useFieldArray, UseFormReturn } from "react-hook-form";

import { useUploadSubmit } from "@/hooks/submit/useUploadSubmit.hook";
import VideoUploadDisplayDialog from "../../dialog/video-upload-display/VideoUploadDisplay.dialog";

const UploadVideoArray = ({
  form,
  name,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: UseFormReturn<any>;
  name: string;
}) => {
  const { uploadFile, isPending } = useUploadSubmit();

  const { fields, append, remove, update } = useFieldArray({
    control: form?.control,
    name: name,
  });

  const setAndUpload = async (files: FileList | null, index: number) => {
    const path = await uploadFile(files, "PROJECT VIDEO");
    update(index, path ? path : "");
    // console.log("values: ", form.getValues(name));
    form.trigger();
  };

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <ul className="w-full ">
        {fields.map((item, index) => (
          <li key={item.id}>
            <div className="flex w-full flex-wrap justify-between items-center">
              <Controller
                name={`image-${index}`}
                control={form?.control}
                render={({ fieldState }) => (
                  <VideoUploadDisplayDialog
                    form={form}
                    title={"Add New Video"}
                    uploadRoute="PROJECT VIDEO"
                  />
                )}
              />
              <Button
                width={"fit"}
                type="button"
                className="rounded-full p-2"
                variant={"destructive_outline"}
                onClick={() => remove(index)}
              >
                <Trash2Icon className="size-6" />
              </Button>
            </div>
          </li>
        ))}
      </ul>
      <Button
        type="button"
        variant={"outline"}
        className="mt-4 p-2"
        onClick={() => append({})}
      >
        Add New Video <PlusIcon className="size-6 rounded-full" />
      </Button>
    </div>
  );
};

export default UploadVideoArray;
