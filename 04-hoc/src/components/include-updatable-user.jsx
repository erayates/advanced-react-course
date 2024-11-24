import axios from "axios";
import { useState, useEffect } from "react";

export const includeUpdatableUser = (Component) => {
  return (props) => {
    const [initialUser, setInitialUser] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
      (async () => {
        const response = await axios.get("https://api.randomuser.me/");
        const data = response.data.results[0];
        setInitialUser(data);
        setUser(data);
      })();
    }, []);

    const onChangeUser = (updates) => {
      setUser({ ...user, ...updates });
    };

    const onPostUser = async () => {
      await axios.post("https://api.randomuser.me/", user);
    };

    return (
      <Component
        {...props}
        user={user}
        onChangeUser={onChangeUser}
        onPostUser={onPostUser}
      />
    );
  };
};
