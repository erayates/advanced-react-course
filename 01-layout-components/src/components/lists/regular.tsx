import React from "react";
import { Author } from "../../data/authors";
import { Book } from "../../data/books";

interface RegularListProps {
  items: (Author | Book)[];
  sourceName: string;
  ItemComponent: React.FC<{ [sourceName: string]: Author | Book }>;
}

export const RegularList = ({
  items,
  sourceName,
  ItemComponent,
}: RegularListProps) => {
  return (
    <React.Fragment>
      <h2>{sourceName}</h2>
      <ul>
        {items.map((item: Author | Book, index: React.Key) => (
          // It will be look like: <ItemComponent author={item} key={index} />
          <li key={index}>
            <ItemComponent {...{ [sourceName]: item }} />
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};
