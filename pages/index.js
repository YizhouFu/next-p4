import Head from "next/head";

import { getFeaturedEvents } from "@/helpers/api-util";
import EventList from "@/components/events/event_list";

export default function Home(props) {
  return (
    <div>
      <Head>
      <title>featured events</title>
        <meta
          name="description"
          content="Find Events that allow you to evolve..."
        />
      </Head>
      <EventList events={props.featuredEvents} />
    </div>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      featuredEvents: featuredEvents,
    },
    revalidate: 60,
  };
}
