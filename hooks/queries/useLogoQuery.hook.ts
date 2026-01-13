import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// Custom hook to fetch logo using React Query
export const useLogoQuery = () => {
  // Define the API endpoint for fetching the logo
  const fetchLogo = async () => {
    const response = await axios.get("/api/admin/logo");
    return response.data.logo;
  };
  return useQuery({
    queryFn: fetchLogo,
    queryKey: ["logo"],
    staleTime: Infinity,
  });
};
