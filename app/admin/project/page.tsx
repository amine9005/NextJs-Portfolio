import { columns } from "@/components/ui/organisms/tables/projects/ProjectColumns";
import { DataTable } from "@/components/ui/organisms/tables/projects/ProjectDataTable";
import { projectSchemaType } from "@/validations/project.zod";

async function getData(): Promise<projectSchemaType[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      title: "Project Title",
      description: "Project Description",
      projectImages: ["image1.jpg", "image2.jpg"],
      projectVideos: [],
      projectModels: ["model1", "model2"],
      isFeatured: true,
      thumbnail: { type: "Image", source: "Upload", fileOrUrl: "image1.jpg" },
    },

    {
      id: "728ed52f",
      title: "Project Title",
      description: "Project Description",
      projectImages: ["image1.jpg", "image2.jpg"],
      projectVideos: [],
      projectModels: ["model1", "model2"],
      isFeatured: true,
      thumbnail: { type: "Image", source: "Upload", fileOrUrl: "image1.jpg" },
    },
    {
      id: "728ed52f",
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

export default async function DemoPage() {
  const data = await getData();

  return (
    <div className="flex justify-center items-center w-full py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
