import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// import { useLogoQuery } from "@/hooks/queries/useLogoQuery.hook";
// import { useEffect } from "react";
import {
  // ProjectFormType,
  projectSchema,
  projectSchemaType,
} from "@/validations/project.zod";

export const useAddProjectForm = () => {
  const form = useForm<projectSchemaType>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      title: "",
      description: "",
      videoSource: "YouTube",
      projectImages: [],
      projectModels: [],
      projectVideos: [],
    },
  });

  return form;
};

// export const useAddProjectFormData = (form: ProjectFormType) => {
//   const { data: logoData, isLoading } = useLogoQuery();

//   useEffect(() => {
//     form.setValue(
//       "leftColor",
//       logoData?.leftColor ? logoData.leftColor : form.getValues("leftColor"),
//     );
//     form.setValue(
//       "rightColor",
//       logoData?.rightColor ? logoData.rightColor : form.getValues("rightColor"),
//     );
//     form.setValue(
//       "imagePath",
//       logoData?.imageUrl ? logoData.imageUrl : form.getValues("imagePath"),
//     );
//     form.setValue(
//       "fullName",
//       logoData?.fullName ? logoData.fullName : form.getValues("fullName"),
//     );
//     form.setValue(
//       "useImage",
//       logoData?.useImage ? logoData.useImage : form.getValues("useImage"),
//     );
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [isLoading]);
// };
