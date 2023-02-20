import { useSelector } from "react-redux";
import { BookList } from "../../components/BookList/BookList";

export function MainList(props) {
  // const bookList = useSelector((store)=>store.BOOK.bookList);
  // return (
  //     <BookList items={bookList}/>
  // );
  return(
    <main>
      <input value={props.inputValue} />
      <p>{props.inputValue}</p>
    </main>
  )
}
