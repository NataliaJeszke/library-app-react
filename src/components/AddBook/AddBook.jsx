import addBookStyle from "./AddBookStyle.module.css";
import { BookMetadataInput } from "../../containers/BookMetadataInput/BookMetadataInput";
export function AddBook() {
  return (
    <div className={addBookStyle.addBook}>
      <h2 className={addBookStyle.header}>Add a book to your list</h2>
      <BookMetadataInput />
    </div>
  );
}
