import { AddBook } from "./components/AddBook/AddBook";
import { FilterBooks } from "./components/FilterBooks/FilterBooks";
import { Header } from "./components/Header/Header";
import { MainList } from "./components/MainList/MainList"


export function App() {
  return (
    <>
      <Header />
      <FilterBooks />
     <MainList/>
      <AddBook />
    </>
  );
}
