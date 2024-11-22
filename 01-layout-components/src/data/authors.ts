export type Author = {
  name: string;
  age: number;
  country: string;
  books: string[];
};

export const authors: Author[] = [
  {
    name: "Sarah Waters",
    age: 55,
    country: "United Kingdom",
    books: ["Fingersmith", "Tipping the Velvet"],
  },
  {
    name: "Haruki Murakami",
    age: 71,
    country: "Japan",
    books: ["1Q84", "Norwegian Wood"],
  },
  {
    name: "Gabriel García Márquez",
    age: 87,
    country: "Colombia",
    books: ["One Hundred Years of Solitude", "Love in the Time of Cholera"],
  },
  {
    name: "J.K. Rowling",
    age: 55,
    country: "United Kingdom",
    books: [
      "Harry Potter and the Philosopher's Stone",
      "Harry Potter and the Chamber of Secrets",
    ],
  },
];
