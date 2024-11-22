import { Book } from "../../data/books";

type Props = {
  book: Book;
};

const LargeBookListItem = (props: Props) => {
  const { name, price, author, pages } = props.book;
  return (
    <p>
      <strong>{name}</strong> ({price})
      <br />
      <small>{author}</small>
      <br />
      <small>{pages}</small>
    </p>
  );
};

export default LargeBookListItem;
