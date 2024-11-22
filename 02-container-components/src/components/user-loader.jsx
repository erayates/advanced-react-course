import axios from "axios";
import { useState, useEffect } from "react";
import React from "react";

export const UserLoader = ({ userId, children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get(`http://localhost:8080/users/${userId}`);
      setUser(response.data);
    })();
  }, []);

  return (
    <React.Fragment>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { user });
        }
        return child;
      })}
    </React.Fragment>
  );
};
