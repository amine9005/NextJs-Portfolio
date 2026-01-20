import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// Custom hook to fetch logo using React Query
export const useHeroMediaQuery = () => {
  // Define the API endpoint for fetching the logo
  const getHeroMedia = async () => {
    const response = await axios.get("/api/admin/hero/media");
    return response.data.hero;
  };
  return useQuery({
    queryFn: getHeroMedia,
    queryKey: ["hero-media"],
    staleTime: Infinity,
  });
};
