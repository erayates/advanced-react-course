import React from "react";
import "./App.css";
import { CurrentUserLoader } from "./components/current-user-loader";
import { UserInfo } from "./components/user-info";
import { UserLoader } from "./components/user-loader";
import { ResourceLoader } from "./components/resource-loader";
import { DataSource } from "./components/data-source";
import axios from "axios";
import { DataSourceWithRender } from "./components/data-source-with-render";

const getDataFromServer = async () => {
  const response = await axios.get("http://localhost:8080/users/2");
  return response.data;
};

const getDataFromLocalStorage = (key) => () => {
  return localStorage.getItem(key);
};

const Message = ({ msg }) => <h1>{msg}</h1>;

function App() {
  // Components added as more specific to more generic components
  return (
    <React.Fragment>
      {/* <CurrentUserLoader>
        <UserInfo />
      </CurrentUserLoader>

      <UserLoader userId="1">
        <UserInfo />
      </UserLoader> */}

      {/* <ResourceLoader
        resourceUrl="http://localhost:8080/users/2"
        resourceName="user"
      >
        <UserInfo />
      </ResourceLoader> */}

      {/* <DataSource
        getData={getDataFromServer}
        resourceName="user"
      >
        <UserInfo />
      </DataSource> */}

      {/* <DataSourceWithRender
        getData={getDataFromServer}
        render={(resource) => {
          return <UserInfo user={resource} />;
        }}
      /> */}

      <DataSource
        getData={() => getDataFromLocalStorage("test")}
        resourceName="msg"
      >
        <Message />
      </DataSource>
    </React.Fragment>
  );
}

export default App;
