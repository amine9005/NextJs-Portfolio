import { getUser } from "@/helpers/authClientHelper.helper";
import { useEffect, useState } from "react";

export function useUser() {
  const [user, setUser] = useState<object | null>(null);

  useEffect(() => {
    const getCurrentUser = async () => {
      setUser(await getUser());
      console.log("getting user");
    };
    getCurrentUser();
  }, []);

  return user;
}
