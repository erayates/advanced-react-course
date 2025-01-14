import { useState, useEffect } from "react";

export type Data<T> =
  | ["fetching", undefined?]
  | ["error", Error]
  | ["success", T];

export const useUser = <T,>(url: string): Data<T> => {
  const [data, setData] = useState<Data<T>>(["fetching"]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setData(["success", res]))
      .catch((err) => setData(["error", err]));
  }, [url]);

  return data;
};

export const App = () => {
  const [status, value] = useUser<{ name: string }>("/user");
  if (status === "fetching") {
    return <div>Loading...</div>;
  }

  if (status === "error") {
    return <div>Error: {value.message}</div>;
  }

  return <div>Hello, {value.name}</div>;
};
