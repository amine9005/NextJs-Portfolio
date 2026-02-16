"use client";
import { columns } from "@/components/ui/organisms/tables/projects/ProjectColumns";
import { DataTable } from "@/components/ui/organisms/tables/projects/ProjectDataTable";
import { useProjectsQuery } from "@/hooks/queries/useProjectQuery.hook";
import { projectSchemaType } from "@/validations/project.zod";

async function getData(): Promise<projectSchemaType[]> {
  // Fetch data from your API here.
  return [
    {
      _id: "728ed52f",
      title: "Project Title",
      description: "Project Description",
      projectImages: ["image1.jpg", "image2.jpg"],
      projectVideos: [],
      projectModels: ["model1", "model2"],
      isFeatured: true,
      thumbnail: { type: "Image", source: "Upload", fileOrUrl: "image1.jpg" },
    },

    {
      _id: "728ed52f",
      title: "Project Title",
      description: "Project Description",
      projectImages: ["image1.jpg", "image2.jpg"],
      projectVideos: [],
      projectModels: ["model1", "model2"],
      isFeatured: true,
      thumbnail: { type: "Image", source: "Upload", fileOrUrl: "image1.jpg" },
    },
    {
      _id: "728ed52f",
      title: "Project Title",
      description: "Project Description",
      projectImages: ["image1.jpg", "image2.jpg"],
      projectVideos: [],
      projectModels: ["model1", "model2"],
      isFeatured: true,
      thumbnail: { type: "Image", source: "Upload", fileOrUrl: "image1.jpg" },
    },
    // ...
  ];
}

export default function ProjectList() {
  const { data, isLoading } = useProjectsQuery();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center w-full h-full">
        Loading...
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center w-full py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
