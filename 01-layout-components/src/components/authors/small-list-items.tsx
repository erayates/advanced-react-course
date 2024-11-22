import { Author } from "../../data/authors";

type Props = {
  author: Author;
};

function SmallListItems({ author }: Props) {
  const { name, age } = author;

  return (
    <p>
      <strong>{name}</strong> ({age})
    </p>
  );
}

export default SmallListItems;
