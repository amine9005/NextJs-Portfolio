import { useForm, UseFormReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useHeroQuery } from "@/hooks/queries/useHeroQuery.hook";
import { heroSchema, HeroSchemaType } from "@/validations/hero.zod";

export const useHeroForm = () => {
  const form = useForm<HeroSchemaType>({
    resolver: zodResolver(heroSchema),
    defaultValues: {
      fullName: "",
      title: "",
      description: "",
      leftColor: "#fff",
      rightColor: "#fff",
    },
  });

  return form;
};

export const useHeroFormData = (form: UseFormReturn<HeroSchemaType>) => {
  const { data: heroData, isLoading } = useHeroQuery();

  useEffect(() => {
    form.setValue(
      "leftColor",
      heroData?.leftColor ? heroData.leftColor : form.getValues("leftColor"),
    );
    form.setValue(
      "rightColor",
      heroData?.rightColor ? heroData.rightColor : form.getValues("rightColor"),
    );

    form.setValue(
      "fullName",
      heroData?.fullName ? heroData.fullName : form.getValues("fullName"),
    );
    form.setValue(
      "title",
      heroData?.title ? heroData.title : form.getValues("title"),
    );
    form.setValue(
      "description",
      heroData?.description
        ? heroData.description
        : form.getValues("description"),
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);
};
