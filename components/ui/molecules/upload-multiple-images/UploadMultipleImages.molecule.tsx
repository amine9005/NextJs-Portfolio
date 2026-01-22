import { Button } from "@/components/ui/atoms/button/button";
import { PlusIcon, Trash2Icon } from "lucide-react";
import { Controller, useFieldArray, UseFormReturn } from "react-hook-form";
import UploadImageFieldInstant from "@/components/ui/molecules/upload-image-instant/UploadImageInstant.molecule";

const UploadMultipleImagesMolecule = ({
  form,
  name,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: UseFormReturn<any>;
  name: string;
}) => {
  const { fields, append, remove, update } = useFieldArray({
    control: form?.control,
    name: name,
  });

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <ul className="w-full ">
        {fields.map((item, index) => (
          <li key={item.id}>
            <div className="flex w-full flex-wrap justify-between items-center">
              <Controller
                name={name}
                control={form?.control}
                render={({ field, fieldState }) => (
                  <UploadImageFieldInstant
                    field={field}
                    fieldState={fieldState}
                    form={form}
                    name={item.id}
                    imageRoute="PROJECT IMAGE"
                    text="Upload New Image"
                    limit={1}
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

            {/* <input {...form.register(`test.${index}.firstName`)} />
            <Controller
              render={({ field }) => <input {...field} />}
              name={`test.${index}.lastName`}
              control={form.control}
            />
            <button type="button" onClick={() => remove(index)}>
              Delete
            </button> */}
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

export default UploadMultipleImagesMolecule;
