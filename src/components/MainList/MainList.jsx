import { useSelector } from "react-redux";
import { BookComponent } from "../BookComponent/BookComponent";
import ListStyle from './MainListStyle.module.css'

export function MainList() {
  const { bookList } = useSelector((state) => state.BOOK);
  console.log(bookList);

  return (
    <div className={ListStyle.mainDiv}>
      {bookList.map((item, index) => (
        <div key={index}>
          <BookComponent item={item}/>
        </div>
      ))}
</div>
  );
}

