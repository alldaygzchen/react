import { books } from "./books";
import Book from "./Book";

const BookList = () => {
  return (
    <>
      <h1>amazon best sellers</h1>
      <section className="booklist">
        {books.map((book, index) => {
          return (
            <Book {...book} key={book.id} number={index}>
              <span>{new Date().toLocaleDateString()}</span>
            </Book>
          );
        })}
      </section>
    </>
  );
};
export default BookList;
