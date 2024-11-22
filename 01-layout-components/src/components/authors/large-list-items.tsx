import { Author } from "../../data/authors";

type Props = {
  [key: string]: Author;
};

export const LargeAuthorListItems = (props: Props) => {
  const { name, age, country, books } = props[Object.keys(props)[0]];

  return (
    <p>
      <strong>{name}</strong> ({age})
      <br />
      <small>{country}</small>
      <br />
      <small>{books.join(", ")}</small>
    </p>
  );
};
