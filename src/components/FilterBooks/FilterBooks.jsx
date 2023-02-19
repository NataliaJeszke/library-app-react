import filterStyle from './FilterBooksStyle.module.css'

export function FilterBooks(){
    return(
        <div className={filterStyle.searchDiv}>
            <h5>Search for books</h5>
            <input></input>
            <button type="submit">Look Up</button>
        </div>
    );
}