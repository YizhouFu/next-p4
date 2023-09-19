import css from "./event_item.module.css";
import Button from "../ui/button";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";
import Image from "next/image";

export default function EventItem(props) {
  const { title, image, date, location, id } = props;

  const ReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAddress = location.replace(", ", "\n");
  const linkIdPath = `/events/${id}`;
  return (
    <li className={css.item}>
      <Image src={"/" + image} alt={title} width={256} height={164}/>
      {/* <img src={"/" + image} alt={title} /> */}
      <div className={css.content}>
        <div className={css.summary}>
          <h2>{title}</h2>
          <div className={css.date}>
            <DateIcon />
            <time>{ReadableDate}</time>
          </div>
          <div className={css.address}>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={css.actions}>
          <Button link={linkIdPath}>
            <span>Explore Event</span>
            <span className={css.icon}><ArrowRightIcon /></span>
          </Button>
        </div>
      </div>
    </li>
  );
}
