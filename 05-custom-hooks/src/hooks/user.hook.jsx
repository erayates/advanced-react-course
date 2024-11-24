import { useState, useEffect } from "react";
import axios from "axios";

export const useUser = (userId) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get("https://api.randomuser.me/");
      const data = response.data.results[userId];
      setUser(data);
    })();
  }, []);

  return { user };
};
