import { useSelector } from "react-redux";
import { BookComponent } from "../BookComponent/BookComponent";

export function MainList() {
  const { bookList } = useSelector((state) => state.BOOK);
  console.log(bookList);

  return (
    // <p>
    //   {bookList.map(({title,author})=>`Title is ${title} and author is ${author}`).join('')
    //   }
    // </p>
    //This works!
    <>
      {bookList.map((item, index) => (
        <div key={index}>
          <p>{item.title}</p>
          <BookComponent item={item} />
        </div>
      ))}
    </>
  );
}

// export default MainList;
