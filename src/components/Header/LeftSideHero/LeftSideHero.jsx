import { AddBook } from "../../AddBook/AddBook";
import { ButtonContact } from "../ButtonContact/ButtonContact";
import leftSideStyle from "./LeftSideStyle.module.css"
export function LeftSideHero({}) {
    return (<div className={leftSideStyle.leftSide}>
      <AddBook/>
    </div>);
  }