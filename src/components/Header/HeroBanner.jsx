import headerStyle from "./HeaderStyle.module.css";
import banner from "./img/bookshelf.png";
import { LeftSideHero } from "./LeftSideHero/LeftSideHero";
export function HeroBanner({}) {
  return (
    <div className={headerStyle.hero}>
        <LeftSideHero/>
      <img src={banner} alt="Hero Banner" className={headerStyle.img}/>
    </div>
  );
}

  