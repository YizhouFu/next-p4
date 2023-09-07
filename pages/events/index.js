import EventList from "@/components/events/event_list";
import SearchEvent from "@/components/events/event_search";
import { getAllEvents } from "@/dummy_events";

export default function AllEvents() {
  const events = getAllEvents();

  return (
    <div>
      <SearchEvent />
      <EventList events={events}/>
    </div>
  );
}
