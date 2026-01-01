"use client";
import FormLayout from "@/components/ui/layouts/Form.layout";
import ContactMeFormCard from "@/components/ui/organisms/contact-me/ContactMeCard.organism";
import { useContactMe } from "@/hooks/useContactMeForm.hook";
import { useContactMeSubmit } from "@/hooks/useContactMeSubmit.hook";

const ContactMeAction = () => {
  const form = useContactMe();
  const { handleSubmit } = form;
  const { loading, onSubmit } = useContactMeSubmit();

  const card = { title: "Contact Me", description: "" };
  const formName = "contact-me";
  return (
    <FormLayout>
      <ContactMeFormCard
        form={form}
        card={card}
        formName={formName}
        loading={loading}
        handle_submit={handleSubmit(onSubmit)}
      />
    </FormLayout>
  );
};

export default ContactMeAction;
