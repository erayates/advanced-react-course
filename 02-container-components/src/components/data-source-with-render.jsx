import { useState, useEffect } from "react";

export const DataSourceWithRender = ({ getData = async () => {}, render }) => {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await getData();
      setResource(response);
    })();
  }, [getData]);

  return render(resource);
};
