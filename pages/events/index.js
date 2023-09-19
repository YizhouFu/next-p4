import EventList from "@/components/events/event_list";
import SearchEvent from "@/components/events/event_search";
import { getAllEvents } from "@/helpers/api-util";
import { useRouter } from "next/router";
import { Fragment } from "react";
import Head from "next/head";

export default function AllEvents(props) {
  const { events } = props;
  const router = useRouter();

  function handleSearch(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }

  return (
    <Fragment>
      <Head>
        <title>all events</title>
        <meta
          name="description"
          content="Find Events that allow you to evolve..."
        />
      </Head>
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
    revalidate: 60,
  };
}
