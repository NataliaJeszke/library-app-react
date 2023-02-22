import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm } from "../../store";
import filterStyle from "./FilterBooksStyle.module.css";

export function FilterBooks() {
  const dispatch = useDispatch();

  const handleSearch = (event) => {
    dispatch(changeSearchTerm(event.target.value));
  };

  const searchTerm = useSelector((state) => {
    return state.searchTerm;
  });

  return (
    <div className={filterStyle.searchDiv}>
      <label>Search by title</label>
      <input value={searchTerm} onChange={handleSearch}></input>
    </div>
  );
}
