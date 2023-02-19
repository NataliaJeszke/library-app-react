import headerStyle from "./HeaderStyle.module.css";
import { HeroBanner } from "./HeroBanner";
export function Header() {
  return (
    <header className={headerStyle.header}>
      <h1>Welcome to your Book List</h1>
      <HeroBanner />
    </header>
  );
}
