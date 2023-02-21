import { createDispatchHook, useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { deleteBook } from "../../store/book/book-slice";
import { BookComponent } from "../BookComponent/BookComponent";
import ListStyle from "./MainListStyle.module.css";

export function MainList() {
  const { bookList } = useSelector((state) => state.BOOK);
  console.log(bookList);

const dispatch = useDispatch();

const handleRemove = (book) => {
  dispatch(deleteBook(book))
}

  return (
    <>
    <div className={ListStyle.mainDiv}>
      {bookList.map((item, index) => (
        <div key={index}>
          <BookComponent item={item} />
          <p>{index}</p>
          <button onClick={handleRemove}>
          DELETE
          </button>
        </div>
      ))}
    </div>
    </>
  );
}
