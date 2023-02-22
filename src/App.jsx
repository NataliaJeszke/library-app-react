import { Header } from "./components/Header/Header";
import { MainList } from "./components/MainList/MainList"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from "./components/Footer/Footer";

export function App() {
  return (
    <>
      <Header />
     <MainList/>
     <Footer/>
    </>
  );
}
