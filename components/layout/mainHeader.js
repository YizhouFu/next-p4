import Link from "next/link";
import css from "./main-header.module.css";

export default function MainHeader() {
  return (
    <header className={css.header}>
      <div className={css.logo}>
        <Link href="/">Next Events Kanban</Link>
      </div>
      <nav className={css.navigation}>
        <ul>
          <li>
            <Link href="/events">All Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
