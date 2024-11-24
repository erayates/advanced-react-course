import { useEffect } from "react";
import { useState } from "react";

export const includeUser = (Component) => {
  return (props) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
      (async () => {
        const response = await fetch("https://api.randomuser.me/");
        const data = await response.json();
        setUser(data.results[0]);
      })();
    }, []);

    return <Component {...props} user={user} />;
  };
};
