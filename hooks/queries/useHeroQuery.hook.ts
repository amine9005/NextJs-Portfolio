import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// Custom hook to fetch logo using React Query
export const useHeroQuery = () => {
  // Define the API endpoint for fetching the logo
  const fetchHero = async () => {
    const response = await axios.get("/api/admin/hero");
    return response.data.hero;
  };
  return useQuery({
    queryFn: fetchHero,
    queryKey: ["hero"],
    staleTime: Infinity,
  });
};
