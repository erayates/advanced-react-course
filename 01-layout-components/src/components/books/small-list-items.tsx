import { Book } from "../../data/books";

type Props = {
  book: Book;
};

const SmallBookListItem = (props: Props) => {
  return (
    <p>
      <strong>{props.book.author}</strong> ({props.book.author})
    </p>
  );
};

export default SmallBookListItem;
