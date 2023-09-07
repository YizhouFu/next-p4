import { getFeaturedEvents } from "@/dummy_events";
import EventList from "@/components/events/event_list";

export default function Home() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <EventList events={featuredEvents} />
    </div>
  );
}
