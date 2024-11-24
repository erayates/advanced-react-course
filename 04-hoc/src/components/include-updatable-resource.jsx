import axios from "axios";
import { useState, useEffect } from "react";

const toCapital = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const includeUpdatableUser = (Component, resourceUrl, resourceName) => {
  return (props) => {
    const [initialResource, setInitialResource] = useState(null);
    const [resource, setResource] = useState(null);

    useEffect(() => {
      (async () => {
        const response = await axios.get(resourceUrl);
        const data = response.data.results[0];
        setInitialUser(data);
        setUser(data);
      })();
    }, []);

    const onChange = (updates) => {
      setResource({ ...resource, ...updates });
    };

    const onPost = async () => {
      await axios.post(resourceUrl, { [resourceName]: resource });
    };

    const resourceProps = {
      [resourceName]: resource,
      [`onChange${toCapital(resourceName)}`]: onChange,
      [`onPost${toCapital(resourceName)}`]: onPost,
    };

    return <Component {...props} {...resourceProps} />;
  };
};
