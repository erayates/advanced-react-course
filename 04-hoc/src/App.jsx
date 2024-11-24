import { includeUser } from "./components/include-user";
import { logProps } from "./components/log-props";
import { UserInfoFormWrapper } from "./components/user-form";
import { UserInfo } from "./components/user-info";

const UserInfoWrapper = logProps(UserInfo);
const UserInfoWithLoader = includeUser(UserInfo);

function App() {
  // From more specific to more generic
  return (
    <>
      <UserInfoWrapper />
      <hr />
      <UserInfoWithLoader />
      <hr />
      <UserInfoFormWrapper />
    </>
  );
}

export default App;
