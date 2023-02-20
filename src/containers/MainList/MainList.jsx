import { useSelector } from "react-redux";
import { BookList } from "../../components/BookList/BookList";
import { BookMetadataInput } from "../BookMetadataInput/BookMetadataInput";

export function MainList() {
const {bookList} = useSelector(state=>state.BOOK)
console.log(bookList)
  return(
    <ul>
      <p></p>
    {/* {listOfBooks.map((bookList)=>(
      <BookMetadataInput title={bookList.title} author={bookList.author}/>
    )
    )} */}
  </ul>
  )
}


// export default MainList;
