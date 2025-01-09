import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import BookList from "./BookList";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <h1>Book List</h1>
    <BookList />
  </StrictMode>
);
