//Pobierać wartości z inputów
// Zapisać wartości do obiektu book z atrybutami
// Wysłać obiekt book do storage (jak utworzyc x książek w storage Redux?/React)

import formStyle from "./BookMetadataInputStyle.module.css";
import { addBookAction } from "../../store/book/book-slice";
import { useDispatch } from "react-redux";
import { useState } from "react";

export function BookMetadataInput(props) {
  const dispatch = useDispatch();

  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const [date, setDate] = useState();
  const [genre, setGenre] = useState();

  function submit(event) {
    event.preventDefault();
    dispatch(addBookAction({ title:title, author:author, date:date, genre:genre }));
    console.log("submit");
  }
  return (
    <form onSubmit={submit} className={formStyle.metadataForm}>
      <label>
        Title:
        <input type="text" onChange={(event) => setTitle(event.target.value)} />
      </label>
      <label>
        Author:
        <input
          type="text"
          onChange={(event) => setAuthor(event.target.value)}
        />
      </label>
      <label>
        Date of publish:
        <input type="text" onChange={(event) => setDate(event.target.value)} />
      </label>
      <label>
        Genre:
        <input type="text" onChange={(event) => setGenre(event.target.value)} />
      </label>
      <button type="submit" value="Submit">
        Add Book
      </button>
    </form>
  );
}
