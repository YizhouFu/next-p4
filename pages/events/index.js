import EventList from "@/components/events/event_list";
import SearchEvent from "@/components/events/event_search";
import { getAllEvents } from "@/dummy_events";
import { useRouter } from "next/router";

export default function AllEvents() {
  const events = getAllEvents();
  const router = useRouter();

  function handleSearch(year, month){
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }

  return (
    <div>
      <SearchEvent onSearch={handleSearch}/>
      <EventList events={events}/>
    </div>
  );
}
