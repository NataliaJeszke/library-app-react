import { useDispatch, useSelector } from "react-redux";
import { deleteBook } from "../../store/book/book-slice";
import { BookComponent } from "../BookComponent/BookComponent";
import { FilterBooks } from "../FilterBooks/FilterBooks";
import { useState } from "react";
import ListStyle from "./MainListStyle.module.css";

export function MainList() {
  const { bookList } = useSelector((state) => state.BOOK);
  console.log(bookList);

  const [searchTerm, setSearchTerm] = useState("")

  const filteredBooks = bookList.filter(item=>{
    const contentTitle = item.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())
    return contentTitle;
  })

  const dispatch = useDispatch();

  const handleRemove = (book) => {
    dispatch(deleteBook(book));
  };

  return (
    <>
    <FilterBooks onTextChange={setSearchTerm} placeholder="search by title"/>
      <div className={ListStyle.mainDiv}>
        {filteredBooks.map((item, index) => (
          <div key={index}>
            <BookComponent item={item} />
            <p>{index}</p>
            <button onClick={handleRemove}>DELETE</button>
          </div>
        ))}
      </div>
    </>
  );
}
