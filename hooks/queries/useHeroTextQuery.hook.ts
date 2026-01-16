import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// Custom hook to fetch logo using React Query
export const useHeroTextQuery = () => {
  // Define the API endpoint for fetching the logo
  const fetchHeroText = async () => {
    const response = await axios.get("/api/admin/hero");
    return response.data.hero;
  };
  return useQuery({
    queryFn: fetchHeroText,
    queryKey: ["hero"],
    staleTime: Infinity,
  });
};
