import bookComponentStyle from "./BookComponentStyle.module.css";

export function BookComponent({ item, index }) {
  return (
    <div className={bookComponentStyle.card}>
      <div className={bookComponentStyle.img}> <img
        src="https://picsum.photos/200/300"
        alt="book cover"
      /></div>
      <div className={bookComponentStyle.titleBox}>
        <h4 className={bookComponentStyle.titleH}>Title</h4>
        <h3 className={bookComponentStyle.title}>{item.title}</h3>
      </div>
      <div className={bookComponentStyle.authorBox}>
        <h4 className={bookComponentStyle.authorH}>Author</h4>
        <p className={bookComponentStyle.author}>{item.author}</p>
      </div>
      <div className={bookComponentStyle.dateBox}>
        <h4 className={bookComponentStyle.dateH}>Date of publish</h4>
        <p className={bookComponentStyle.date}>{item.data}</p>
      </div>
      <div className={bookComponentStyle.genre}>
        <h4 className={bookComponentStyle.genreH}>Genre</h4>
        <p className={bookComponentStyle.genre}>{item.genre}</p>
      </div>
      </div>
  );
}
