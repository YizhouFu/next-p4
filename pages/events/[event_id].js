import EventContent from "@/components/event-detail/event-content";
import EventLogistics from "@/components/event-detail/event-logistics";
import EventSummary from "@/components/event-detail/event-summary";
import { getEventById } from "@/dummy_events";
import { useRouter } from "next/router";
import { Fragment } from "react";

export default function EventDetail() {
  const router = useRouter();

  const eventId = router.query.event_id;
  const event = getEventById(eventId);

  if (!event) {
    return <p>no such event</p>;
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
