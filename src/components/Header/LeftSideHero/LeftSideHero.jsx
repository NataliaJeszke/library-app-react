import { ButtonContact } from "../ButtonContact/ButtonContact";
import leftSideStyle from "./LeftSideStyle.module.css"
export function LeftSideHero({}) {
    return (<div className={leftSideStyle.leftSide}>
      <div className={leftSideStyle.heroText}>
        <h2>Your first React BookShelf App</h2>
      </div>
      <ButtonContact />
    </div>);
  }