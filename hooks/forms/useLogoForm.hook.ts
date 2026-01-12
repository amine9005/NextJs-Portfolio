import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { logoSchema, LogoSchemaType } from "@/validations/logo.zod";

export const useLogoForm = () => {
  const form = useForm<LogoSchemaType>({
    resolver: zodResolver(logoSchema),
    defaultValues: {
      fullName: "",
      imagePath: "",
      leftColor: "#fff",
      rightColor: "#fff",
      useImage: false,
    },
  });

  return form;
};
