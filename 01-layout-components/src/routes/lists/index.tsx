import { createFileRoute } from "@tanstack/react-router";
import { RegularList } from "../../components/lists/regular";
import { Author, authors } from "../../data/authors";
import { LargeAuthorListItems } from "../../components/authors/large-list-items";
import { Book, books } from "../../data/books";
import SmallListItems from "../../components/authors/small-list-items";
import SmallBookListItem from "../../components/books/small-list-items";
import LargeBookListItem from "../../components/books/large-list-items";

export const Route = createFileRoute("/lists/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <h1>Lists</h1>
      <p>Authors</p>
      <p>Large:</p>
      <RegularList
        items={authors}
        sourceName="author"
        ItemComponent={(props) => (
          <LargeAuthorListItems {...props} author={props["author"] as Author} />
        )}
      />

      <p>Small:</p>
      <RegularList
        items={books}
        sourceName="book"
        ItemComponent={(props) => (
          <SmallListItems {...props} author={props["author"] as Author} />
        )}
      />

      <p>Books:</p>

      <p>Large:</p>
      <RegularList
        items={books}
        sourceName="book"
        ItemComponent={(props) => (
          <SmallBookListItem {...props} book={props["book"] as Book} />
        )}
      />

      <p>Small:</p>
      <RegularList
        items={books}
        sourceName="book"
        ItemComponent={(props) => (
          <LargeBookListItem {...props} book={props["book"] as Book} />
        )}
      />
    </div>
  );
}
