import {BookComponent} from "../BookComponent/BookComponent";

export function BookList({ items }) {
  return (
    <div>
      <table>
        <tbody>
          {items.map((item, index) => {
            return <BookComponent key={item + index} item={item} />;
          })}
        </tbody>
      </table>
    </div>
  );
}