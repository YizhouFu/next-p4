import Link from "next/link";
import css from "./button.module.css";

export default function Button(props) {
  return (
    <Link href={props.link} legacyBehavior>
      <a className={css.btn}>{props.children}</a>
    </Link>
  );
}
