"use client";
import { memo } from "react";
import FormLayout from "@/components/ui/layouts/Form.layout";

import { useHeroTextSubmit } from "@/hooks/submit/useHeroTextSubmit.hook";
import EditHeroMediaCard from "@/components/ui/organisms/cards/edit-hero/EditHeroMedia.card";
import { useHeroMediaForm } from "@/hooks/forms/useHeroMediaFrom.hook";

const EditLogoAction = () => {
  const form = useHeroMediaForm();

  const { handleSubmit } = form;
  const { onSubmit, loading } = useHeroTextSubmit();

  const card = { title: "Edit Your Hero Media", description: "" };
  const formName = "Hero-Form";

  return (
    <FormLayout>
      {" "}
      <EditHeroMediaCard
        loading={loading}
        form={form}
        card={card}
        formName={formName}
        handle_submit={() => {}}
      />
    </FormLayout>
  );
};

export default memo(EditLogoAction);
