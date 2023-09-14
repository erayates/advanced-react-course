import { useState, useEffect } from "react";
import axios from "axios";
import BookCard from "./book-card";
import { useLocation } from "react-router-dom";


const BooksList = () => {
  const {state} = useLocation();
  const [books, setBooks] = useState(null) || {};

  useEffect(() => {
    if(state) console.warn(`No result found for ${state.id}`)
  }, []);

  useEffect(() => {
    (async () => {
      const response = await axios.get("//localhost:3001/books");
      setBooks(response.data);
    })();
  }, []);
  return books ? (
    <>
      {books.map((book) => (
        <BookCard key={book.id} book={book}/>
      ))}
    </>
  ) : (
    <h3>Loading...</h3>
  );
};

export default BooksList;
