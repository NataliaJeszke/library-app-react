import { useDispatch, useSelector } from "react-redux";
import { deleteBook } from "../../store/book/book-slice";
import { BookComponent } from "../BookComponent/BookComponent";
import ListStyle from "./MainListStyle.module.css";

export function MainList() {
  // const { bookList } = useSelector((state) => state.BOOK);
  // console.log(bookList);

  const filterBookList = useSelector(({ BOOK: { bookList, searchTerm } }) => {
    return bookList.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  console.log("to jest filterBookList__" + filterBookList);

  const dispatch = useDispatch();

  const handleRemove = (book) => {
    dispatch(deleteBook(book));
  };

  return (
    <>
      <div className={ListStyle.mainDiv}>
        {filterBookList.map((item, index) => (
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
