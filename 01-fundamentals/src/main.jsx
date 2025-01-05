import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { books } from './books';
import Book from './Book';

function BookList() {
  return (
    <>
      <h1>amazon best sellers</h1>
      <section className="booklist">
        {books.map((book) => {
          return <Book {...book} key={book.id} />;
        })}
      </section>
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1>Book List</h1>
    <BookList />
  </StrictMode>
);
