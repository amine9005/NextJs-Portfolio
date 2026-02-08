import { useForm, UseFormReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// import { useLogoQuery } from "@/hooks/queries/useLogoQuery.hook";
// import { useEffect } from "react";
import {
  projectImageSchema,
  projectImageSchemaType,
  projectModelSchema,
  projectModelSchemaType,
  // ProjectFormType,
  projectSchema,
  projectSchemaType,
  projectSettingSchema,
  projectSettingSchemaType,
  projectTextSchema,
  projectTextSchemaType,
  projectVideoSchema,
  projectVideoSchemaType,
} from "@/validations/project.zod";
import { useAddProjectStore } from "@/store/admin/addProject.store";

export const useProjectForm = () => {
  const form = useForm<projectSchemaType>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      title: "",
      description: "",
      isFeatured: false,
      thumbnail: {},
      projectImages: [],
      projectModels: [],
      projectVideos: [],
    },
  });

  return form;
};

export const useProjectTextForm = () => {
  const title = useAddProjectStore((state) => state.title);
  const description = useAddProjectStore((state) => state.description);
  const form = useForm<projectTextSchemaType>({
    resolver: zodResolver(projectTextSchema),
    defaultValues: {
      title: title ? title : "",
      description: description ? description : "",
    },
  });

  return form;
};

export const useProjectImagesForm = () => {
  const projectImages = useAddProjectStore((state) => state.projectImages);

  const form = useForm<projectImageSchemaType>({
    resolver: zodResolver(projectImageSchema),
    defaultValues: {
      projectImages: projectImages ? projectImages : [],
    },
  });

  return form;
};

export const useProjectVideosForm = () => {
  const projectVideos = useAddProjectStore((state) => state.projectVideos);

  const form = useForm<projectVideoSchemaType>({
    resolver: zodResolver(projectVideoSchema),
    defaultValues: {
      projectVideos: projectVideos ? projectVideos : [],
    },
  });

  return form;
};

export const useProjectModelsForm = () => {
  const projectModels = useAddProjectStore((state) => state.projectModels);

  const form = useForm<projectModelSchemaType>({
    resolver: zodResolver(projectModelSchema),
    defaultValues: {
      projectModels: projectModels ? projectModels : [],
    },
  });

  return form;
};

export const useProjectSettingForm = () => {
  const form = useForm<projectSettingSchemaType>({
    resolver: zodResolver(projectSettingSchema),
    defaultValues: {
      isFeatured: false,
      thumbnail: { type: "Image", source: "Upload", fileOrUrl: "" },
    },
  });

  return form;
};

// export const useProjectFormData = (form: ProjectFormType) => {
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
