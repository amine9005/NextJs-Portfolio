"use client";
import { memo, useState } from "react";
import FormLayout from "@/components/ui/layouts/Form.layout";
import EditLogoCard from "@/components/ui/organisms/cards/edit-logo/EditLogo.card";
import { useLogoForm, useLogoFormData } from "@/hooks/forms/useLogoForm.hook";
import { useLogoSubmit } from "@/hooks/submit/useLogoSubmit.hook";

const EditLogoAction = () => {
  const form = useLogoForm();
  useLogoFormData(form);

  const [filePath, setFilePath] = useState<FileList | null>(null);

  const { handleSubmit } = form;
  const { onSubmit, loading } = useLogoSubmit(filePath);

  const card = { title: "Update Your Logo", description: "" };
  const formName = "TitleAndLogo-Form";

  const updateFilePath = (files: FileList | null) => {
    if (files) {
      setFilePath(files);
      form.setValue("imagePath", files[0].name); // Set the value of imagePath to the name of the first selected file
    }
  };

  return (
    <FormLayout>
      {" "}
      <EditLogoCard
        loading={loading}
        form={form}
        card={card}
        formName={formName}
        filePath={filePath}
        setFilePath={updateFilePath}
        handle_submit={handleSubmit(onSubmit)}
      />
    </FormLayout>
  );
};

export default memo(EditLogoAction);
