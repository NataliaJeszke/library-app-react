import headerStyle from "./HeaderStyle.module.css";
import { HeroBanner } from "./HeroBanner";
export function Header() {
  return (
    <header className={headerStyle.header}>
      <h1 className={headerStyle.h1}>Welcome to your Bookshelf App</h1>
      <HeroBanner />
    </header>
  );
}
