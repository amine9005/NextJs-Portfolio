"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Button } from "@/components/ui/atoms/button/button";

import { Checkbox } from "@/components/ui/atoms/checkbox/checkbox";
import { projectSchemaType } from "@/validations/project.zod";
import { Label } from "@/components/ui/atoms/label/label";
import { PenBoxIcon, Trash2Icon } from "lucide-react";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<projectSchemaType>[] = [
  // {
  //   id: "select",
  //   header: ({ table }) => (
  //     <Checkbox
  //       checked={
  //         table.getIsAllPageRowsSelected() ||
  //         (table.getIsSomePageRowsSelected() && "indeterminate")
  //       }
  //       onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
  //       aria-label="Select all"
  //     />
  //   ),
  //   cell: ({ row }) => (
  //     <Checkbox
  //       checked={row.getIsSelected()}
  //       onCheckedChange={(value) => row.toggleSelected(!!value)}
  //       aria-label="Select row"
  //     />
  //   ),
  //   enableSorting: false,
  //   enableHiding: false,
  // },
  {
    accessorKey: "title",
    header: "Title",
  },

  {
    accessorKey: "description",
    header: "Description",
  },

  {
    accessorKey: "isFeatured",
    header: "Featured",
    cell: ({ row }) => {
      const project = row.original;
      const checkFor = "featured " + project.id!;
      return (
        <div className="flex justify-start items-center gap-4">
          <Checkbox
            id={checkFor}
            checked={project.isFeatured}
            onClick={() => {
              project.isFeatured = !project.isFeatured;
              console.log("clicked value = ", project.isFeatured);
            }}
            aria-label="Select row"
          />
          <Label className="cursor-pointer" htmlFor={checkFor}>
            Feature This Project
          </Label>
        </div>
      );
    },
  },
  {
    id: "delete",
    header: "Delete",
    cell: () => (
      <Trash2Icon className="size-5 hover:text-red-600 cursor-pointer hover:scale-110" />
    ),
  },

  {
    id: "Edit",
    header: "Edit",
    cell: () => (
      <PenBoxIcon className="size-5 cursor-pointer hover:scale-110" />
    ),
  },
];
