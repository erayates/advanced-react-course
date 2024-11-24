import { useCallback } from "react";
import { useCurrentUser } from "./hooks/current-user.hook";
import { useDataSource } from "./hooks/data-source.hook";
import { useResource } from "./hooks/resource.hook";
import { useUser } from "./hooks/user.hook";
import axios from "axios";

const fetchFromServer = async (resourceUrl) => {
  const response = await axios.get(resourceUrl);
  return response.data[0];
};

function App() {
  const { user: currentUser } = useCurrentUser();
  const { user: user } = useUser(0);
  const { resource } = useResource(
    "https://jsonplaceholder.typicode.com/posts"
  );

  const fetchData = useCallback(
    () => fetchFromServer("https://jsonplaceholder.typicode.com/posts"),
    []
  );
  const { resource: data } = useDataSource(fetchData);

  return (
    <>
      <pre>{JSON.stringify(currentUser, null, 2)}</pre>
      <hr />
      <hr />
      <hr />
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <hr />
      <hr />
      <hr />
      <pre>{JSON.stringify(resource, null, 2)}</pre>
      <hr />
      <hr />
      <hr />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}

export default App;
