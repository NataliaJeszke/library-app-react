import { AddBook } from "./components/AddBook/AddBook";
import { Header } from "./components/Header/Header";
import { MainList } from "./components/MainList/MainList"


export function App() {
  return (
    <>
      <Header />
     <MainList/>
      <AddBook />
    </>
  );
}
