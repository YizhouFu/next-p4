import { getFeaturedEvents } from "@/helpers/api-util";
import EventList from "@/components/events/event_list";

export default function Home(props) {
  return (
    <div>
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
