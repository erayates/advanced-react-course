import { useState, useEffect } from "react";
import axios from "axios";

export const useCurrentUser = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get("https://api.randomuser.me/");
      const data = response.data.results[0];
      setUser(data);
    })();
  }, []);

  return { user };
};
