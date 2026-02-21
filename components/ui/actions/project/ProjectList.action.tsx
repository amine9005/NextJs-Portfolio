"use client";
import { columns } from "@/components/ui/organisms/tables/projects/ProjectColumns";
import { DataTable } from "@/components/ui/organisms/tables/projects/ProjectDataTable";
import { useProjectsQuery } from "@/hooks/queries/useProjectQuery.hook";

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
