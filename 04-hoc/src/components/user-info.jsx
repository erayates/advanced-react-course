export const UserInfo = ({ user }) => {
  return user ? (
    <>
      <h2>{user.name.first + " " + user.name.last}</h2>
      <p>Age: {user.dob.age}</p>
      <p>Country: {user.nat}</p>
    </>
  ) : (
    <p>Loading...</p>
  );
};
