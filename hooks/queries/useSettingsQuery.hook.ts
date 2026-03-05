import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// Custom hook to fetch logo using React Query
export const useSettingsQuery = () => {
  // Define the API endpoint for fetching the logo
  const fetchSettings = async () => {
    const response = await axios.get("/api/admin/settings");
    return response.data.settings;
  };
  return useQuery({
    queryFn: fetchSettings,
    queryKey: ["settings"],
    staleTime: Infinity,
  });
};
