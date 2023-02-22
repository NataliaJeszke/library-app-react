import { addBookAction } from "../../store/book/book-slice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import bookFormStyle from "./BookMetadataInputStyle.module.css"

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
    <Form>
    <form onSubmit={submit} className={bookFormStyle.formBox}>
      <label className={bookFormStyle.title}>
        Title:
        <input type="text" onChange={(event) => setTitle(event.target.value)} className="p-1 ms-4" />
      </label>
      <label>
        Author:
        <input
          type="text"
          onChange={(event) => setAuthor(event.target.value)} className="p-1 ms-1" 
        />
      </label>
      <label>
        Date of publish:
        <input type="text" onChange={(event) => setDate(event.target.value)} className={bookFormStyle.date}/>
      </label>
      <label>
        Genre:
        <input type="text" onChange={(event) => setGenre(event.target.value)} className="p-1 ms-3" />
      </label>
      <button type="submit" value="Submit">
        Add Book
      </button>
    </form>
    </Form>
  );
}
