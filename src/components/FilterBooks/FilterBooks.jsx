import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm } from "../../store";
import filterStyle from "./FilterBooksStyle.module.css";

export function FilterBooks({onTextChange, placeholder}) {

  return (
    <div className={filterStyle.searchDiv}>
      <label>Search by title</label>
      <input onChange={(event)=>onTextChange(event.target.value)} placeholder={placeholder}></input>
    </div>
  );
}
