import EventItem from "./event_item";

export default function EventList(props) {
  const { events } = props;

  return (
    <ul>
      {events.map((event) => (
        <EventItem />
      ))}
    </ul>
  );
}
