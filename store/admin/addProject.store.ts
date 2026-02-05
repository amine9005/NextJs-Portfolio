import { Video } from "@/types/project.types";
import { create } from "zustand";

type addProjectState = {
  title: string | null;
  setTitle: (value: string | null) => void;
  description: string | null;
  setDescription: (value: string | null) => void;
  projectImages: string[] | undefined;
  setImages: (value: string[] | undefined) => void;
  projectVideos: Video[] | undefined;
  setProjectVideos: (value: Video[] | undefined) => void;
};

export const useAddProjectStore = create<addProjectState>((set) => ({
  title: null,
  description: null,
  projectImages: undefined,
  projectVideos: undefined,
  setTitle: (value) => set({ title: value }),
  setDescription: (value) => set({ description: value }),
  setImages: (value) => set({ projectImages: value }),
  setProjectVideos: (value) => set({ projectVideos: value }),
}));
