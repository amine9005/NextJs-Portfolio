"use client";
import { memo } from "react";
import FormLayout from "@/components/ui/layouts/Form.layout";
import { useHeroForm, useHeroFormData } from "@/hooks/forms/useHeroForm.hook";
import { useHeroSubmit } from "@/hooks/submit/useHeroSubmit.hook";
import EditHeroTextCard from "@/components/ui/organisms/cards/edit-hero/EditHeroText.card";

const EditLogoAction = () => {
  const form = useHeroForm();
  useHeroFormData(form);

  const { handleSubmit } = form;
  const { onSubmit, loading } = useHeroSubmit();

  const card = { title: "Edit Your Hero Text", description: "" };
  const formName = "Hero-Form";

  return (
    <FormLayout>
      {" "}
      <EditHeroTextCard
        loading={loading}
        form={form}
        card={card}
        formName={formName}
        handle_submit={handleSubmit(onSubmit)}
      />
    </FormLayout>
  );
};

export default memo(EditLogoAction);
