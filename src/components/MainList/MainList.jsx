import { useDispatch, useSelector } from "react-redux";
import { deleteBook } from "../../store/book/book-slice";
import { BookComponent } from "../BookComponent/BookComponent";
import { FilterBooks } from "../FilterBooks/FilterBooks";
import { useState } from "react";
import listStyle from "./MainListStyle.module.css";

export function MainList() {
  const { bookList } = useSelector((state) => state.BOOK);
  console.log(bookList);

  const [searchTerm, setSearchTerm] = useState("")

  const filteredBooks = bookList.filter(item=>{
    const contentTitle = item.title.toLowerCase().includes(searchTerm.toLowerCase())
    return contentTitle;
  })

  const dispatch = useDispatch();
 
 function handleRemove (index) {
    dispatch(deleteBook(index));
  };

  return (
    <div className={listStyle.main}>
    <FilterBooks onTextChange={setSearchTerm} placeholder="search by title"/>
      <h2 class={listStyle.h2}>Your Bookshelf</h2>
      <div className={listStyle.mainDiv}>
        {filteredBooks.map((item, index) => (
          <div key={index} className={listStyle.outputDiv}>
            <BookComponent item={item} />
            <p>{index}</p>
            <button onClick={() => handleRemove(index)} className={listStyle.button}>Delete</button>
          </div>
        ))}
      </div>
      </div>
  );
}
