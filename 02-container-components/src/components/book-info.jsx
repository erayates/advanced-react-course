export const BookInfo = ({ book }) => {
  const { name, price, title, pages } = book || {};

  return book ? (
    <div>
      <h1>{title}</h1>
      <p>Price: {price}</p>
      <p>Pages: {pages}</p>
    </div>
  ) : (
    <h1>Loading...</h1>
  );
};
