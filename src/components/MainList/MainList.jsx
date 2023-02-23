import { useDispatch, useSelector } from "react-redux";
import { deleteBookByNanoID } from "../../store/book/book-slice";
import { BookComponent } from "../BookComponent/BookComponent";
import { FilterBooks } from "../FilterBooks/FilterBooks";
import { useState } from "react";
import listStyle from "./MainListStyle.module.css";

export function MainList() {
  const { bookList } = useSelector((state) => state.BOOK);
  console.log(bookList);

  const [searchTerm, setSearchTerm] = useState("");

  const filteredBooks = bookList.filter((item) => {
    const contentTitle = item.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return contentTitle;
  });

  const dispatch = useDispatch();

  function handleRemove(id) {
    dispatch(deleteBookByNanoID(id));
  }

  return (
    <div className={listStyle.main}>
      <FilterBooks onTextChange={setSearchTerm} placeholder="search by title" />
      <div>
        {bookList.length > 0 ? (
          <h2 className={listStyle.h2}>
            You have {bookList.length} books on your Bookshelf{" "}
          </h2>
        ) : (
          <h2 className={listStyle.h2}>Your Bookshelf is empty &#128532;</h2>
        )}
      </div>
      <div className={listStyle.mainDiv}>
        {filteredBooks.map((item, index) => (
          <div key={index} className={listStyle.outputDiv}>
            <BookComponent item={item} />
            <button
              onClick={() => handleRemove(item.id)}
              className={listStyle.button}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
