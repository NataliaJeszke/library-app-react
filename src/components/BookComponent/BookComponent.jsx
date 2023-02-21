import bookComponentStyle from "./BookComponentStyle.module.css";

export function BookComponent({ item, index }) {
  return (
    <div className={bookComponentStyle.card}>
      <div>IMG</div>
      <div className={bookComponentStyle.title}>
        <h4>Title</h4>
        <h3>{item.title}</h3>
      </div>
      <div className={bookComponentStyle.author}>
        <h4>Author</h4>
        <p>{item.author}</p>
      </div>
      <div className={bookComponentStyle.date}>
        <h4>Date of publish</h4>
        <p>{item.data}</p>
      </div>
      <div className={bookComponentStyle.genre}>
        <h4>Genre</h4>
        <p>{item.genre}</p>
      </div>
      </div>
  );
}
