import { useForm, UseFormReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { logoSchema, LogoSchemaType } from "@/validations/logo.zod";
import { useLogoQuery } from "@/hooks/queries/useLogoQuery.hook";
import { useEffect } from "react";
import { useTmpLogoStore } from "@/store/admin/logo.store";
import { settingsSchema, settingsSchemaType } from "@/validations/settings.zod";

export const useLogoForm = () => {
  const tmpImagePath = useTmpLogoStore((state) => state.imagePath);

  const form = useForm<settingsSchemaType>({
    resolver: zodResolver(settingsSchema),
    defaultValues: {
      copyright: "",
      primaryColor: "#fff",
      secondaryColor: "#fff",
      circleColor: "#fff",
      useCircle: false,
    },
  });

  return form;
};

export const useLogoFormData = (form: UseFormReturn<LogoSchemaType>) => {
  const { data: logoData, isLoading } = useLogoQuery();

  useEffect(() => {
    form.setValue(
      "leftColor",
      logoData?.leftColor ? logoData.leftColor : form.getValues("leftColor"),
    );
    form.setValue(
      "rightColor",
      logoData?.rightColor ? logoData.rightColor : form.getValues("rightColor"),
    );
    form.setValue(
      "imagePath",
      logoData?.imageUrl ? logoData.imageUrl : form.getValues("imagePath"),
    );
    form.setValue(
      "fullName",
      logoData?.fullName ? logoData.fullName : form.getValues("fullName"),
    );
    form.setValue(
      "useImage",
      logoData?.useImage ? logoData.useImage : form.getValues("useImage"),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);
};
