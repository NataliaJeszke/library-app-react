import { addBookAction } from "../../store/book/book-slice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import formStyle from "./BookMetadataInputStyle.module.css"

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
    <form onSubmit={submit} className={formStyle.formBox}>
      <label>
        Title:
        <input type="text" onChange={(event) => setTitle(event.target.value)} className={formStyle.title}/>
      </label>
      <label>
        Author:
        <input
          type="text"
          onChange={(event) => setAuthor(event.target.value)} className={formStyle.author}
        />
      </label>
      <label>
        Date of publish:
        <input type="text" onChange={(event) => setDate(event.target.value)} className={formStyle.date}/>
      </label>
      <label>
        Genre:
        <input type="text" onChange={(event) => setGenre(event.target.value)} className={formStyle.genre}/>
      </label>
      <button type="submit" value="Submit" className={formStyle.button}>
        Add Book
      </button>
    </form>
  );
}
