export const UserInfo = ({ user }) => {
  console.log(user);
  const { name, age, country, books } = user || {};

  return user ? (
    <div>
      <h1>{name}</h1>
      <p>Age: {age} years</p>
      <p>Country: {country}</p>
      <h2>Books</h2>
      <ul>
        {books.map((book, _idx) => (
          <li key={_idx}>
            <h3>{book}</h3>
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <h1>Loading...</h1>
  );
};
