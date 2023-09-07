import Link from "next/link";
import css from "./button.module.css";

export default function Button(props) {
  if (props.link) {
    return (
      //<Link> provide an <a> by default
      //therefore this is trying to put an <a> in another <a>
      //which doesn't work normally, to make this work:
      //legacyBehavior force <Link> to use the <a> we provide
      <Link href={props.link} legacyBehavior>
        <a className={css.btn}>{props.children}</a>
      </Link>
    );
  }
  return (
    <button className={css.btn} onClick={props.onClick}>
      {props.children}
    </button>
  );
}
