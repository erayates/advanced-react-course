import { includeUpdatableUser } from "./include-updatable-user";

export const UserInfoFormWrapper = includeUpdatableUser(
  (user, onChangeUser, onPostUser) => {
    console.log(user);
    return user ? (
      <>
        <label>{user.name + " " + user.name}</label>
        <input
          type="text"
          value={user.name}
          onChange={(e) => onChangeUser({ name: e.target.value })}
        />

        <label>{user.email}</label>
        <input
          type="number"
          value={user.email}
          onChange={(e) => onChangeUser({ email: e.target.value })}
        />

        <label>{user.nat}</label>
        <input
          type="text"
          value={user.nat}
          onChange={(e) => onChangeUser({ nat: e.target.value })}
        />

        <p>Country: {user.nat}</p>

        <button onClick={onPostUser}>Post User</button>
      </>
    ) : (
      <p>Loading...</p>
    );
  },
  "https://api.randomuser.me/",
  "user"
);
