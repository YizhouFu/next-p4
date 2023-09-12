import EventList from "@/components/events/event_list";
import SearchEvent from "@/components/events/event_search";
import { getAllEvents } from "@/helpers/api-util";
import { useRouter } from "next/router";
import { Fragment } from "react";

export default function AllEvents(props) {
  const { events } = props;
  const router = useRouter();

  function handleSearch(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }

  return (
    <Fragment>
      <SearchEvent onSearch={handleSearch} />
      <EventList events={events} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const events = await getAllEvents();

  return {
    props: {
      events: events,
    },
    
  };
}
