import filterStyle from "./FilterBooksStyle.module.css";

export function FilterBooks({onTextChange, placeholder}) {

  return (
    <div className={filterStyle.searchDiv}>
      <label>Filter by title</label>
      <input onChange={(event)=>onTextChange(event.target.value)} placeholder={placeholder} className={filterStyle.searchBox}></input>
    </div>
  );
}
