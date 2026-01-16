import { useForm, UseFormReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { heroMediaSchema, heroMediaSchemaType } from "@/validations/hero.zod";

export const useHeroMediaForm = () => {
  const form = useForm<heroMediaSchemaType>({
    resolver: zodResolver(heroMediaSchema),
    defaultValues: {
      displayType: "Image",
      videoSource: "Other",
      imageUrl: "",
      videoUrl: "",
      model3D_Url: "",
    },
  });

  return form;
};

// export const useHeroTextFormData = (
//   form: UseFormReturn<heroMediaSchemaType>,
// ) => {
//   const { data: heroData, isLoading } = useHeroQuery();

//   useEffect(() => {
//     form.setValue(
//       "leftColor",
//       heroData?.leftColor ? heroData.leftColor : form.getValues("leftColor"),
//     );
//     form.setValue(
//       "rightColor",
//       heroData?.rightColor ? heroData.rightColor : form.getValues("rightColor"),
//     );

//     form.setValue(
//       "fullName",
//       heroData?.fullName ? heroData.fullName : form.getValues("fullName"),
//     );
//     form.setValue(
//       "title",
//       heroData?.title ? heroData.title : form.getValues("title"),
//     );
//     form.setValue(
//       "description",
//       heroData?.description
//         ? heroData.description
//         : form.getValues("description"),
//     );

//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [isLoading]);
// };
