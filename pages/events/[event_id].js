import EventContent from "@/components/event-detail/event-content";
import EventLogistics from "@/components/event-detail/event-logistics";
import EventSummary from "@/components/event-detail/event-summary";
import ErrorAlert from "@/components/ui/error-alert";
import { getEventById, getAllEvents } from "@/helpers/api-util";
// import { useRouter } from "next/router";
import { Fragment } from "react";

export default function EventDetail(props) {
  // const router = useRouter();
  // const eventId = router.query.event_id;
  const event = props.event;

  if (!event) {
    return (
      <ErrorAlert>
        <p>No Event Was Found</p>;
      </ErrorAlert>
    );
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const eventId = context.params.event_id;
  const event = await getEventById(eventId);
  return {
    props: {
      event: event,
    },
  };
}

export async function getStaticPaths() {
  const events = await getAllEvents();
  const paths = events.map((event) => ({ params: { event_id: event.id } }));

  return {
    paths: paths,
    fallback: false,
  };
}
