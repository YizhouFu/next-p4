import Link from "next/link";

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
    <li>
      <img src={"/" + image} alt={title} />
      <div>
        <div>
          <h2>{title}</h2>
          <div>
            <time>{ReadableDate}</time>
          </div>
          <div>
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div>
          <Link href={linkIdPath}>Explore Event</Link>
        </div>
      </div>
    </li>
  );
}
