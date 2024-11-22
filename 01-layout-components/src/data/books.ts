export type Book = {
  name: string;
  pages: number;
  author: string;
  price: number;
};

export const books: Book[] = [
  {
    name: "The Pragmatic Programmer",
    pages: 352,
    author: "Andrew Hunt, David Thomas",
    price: 30,
  },
  {
    name: "Clean Code",
    pages: 464,
    author: "Robert C. Martin",
    price: 40,
  },
  {
    name: "Refactoring",
    pages: 448,
    author: "Martin Fowler",
    price: 35,
  },
  {
    name: "Design Patterns",
    pages: 470,
    author: "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides",
    price: 45,
  },
];
