import EventItem from "./event_item";
import css from "./event_list.module.css";

export default function EventList(props) {
  const { events } = props;

  return (
    <ul className={css.list}>
      {events.map((event) => (
        <EventItem
          key={event.id}
          id={event.id}
          title={event.title}
          location={event.location}
          date={event.date}
          image={event.image}
        />
      ))}
    </ul>
  );
}
