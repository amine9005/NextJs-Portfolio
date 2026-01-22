import { Button } from "@/components/ui/atoms/button/button";
import { Loader2Icon, PlusIcon, Trash2Icon, UploadIcon } from "lucide-react";
import { Controller, useFieldArray, UseFormReturn } from "react-hook-form";
import {
  Field,
  FieldError,
  FieldLabel,
} from "@/components/ui/atoms/field/field";
import { useUploadSubmit } from "@/hooks/submit/useUploadSubmit.hook";
import { validateImages } from "@/validations/upload.validate";

const UploadImagesArray = ({
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
    const path = await uploadFile(files, "PROJECT IMAGE");
    update(index, path ? { path: path } : { path: "" });
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
                  <Field
                    className="mt-2 max-w-4/5"
                    data-invalid={fieldState.invalid}
                  >
                    <FieldLabel
                      className="flex flex-wrap justify-start"
                      htmlFor={`image-${index}`}
                    >
                      <div className="flex flex-wrap overflow-x-hidden justify-start items-center gap-2 hover:cursor-pointer">
                        <input
                          type="file"
                          accept="image/*"
                          multiple
                          onChange={(e) =>
                            setAndUpload(
                              validateImages(e.target.files, 1),
                              index,
                            )
                          }
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
                          {form.getValues(name)[index]["path"]
                            ? form.getValues(name)[index]["path"]
                            : "Upload New Image"}
                        </span>
                      </div>
                    </FieldLabel>

                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
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
        onClick={() => append({ path: "" })}
      >
        Add New image <PlusIcon className="size-6 rounded-full" />
      </Button>
    </div>
  );
};

export default UploadImagesArray;
