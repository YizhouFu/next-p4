import EventList from "@/components/events/event_list";
import ResultsTitle from "@/components/events/results-title";
import Button from "@/components/ui/button";
import ErrorAlert from "@/components/ui/error-alert";
import { getFilteredEvents } from "@/dummy_events";
import { useRouter } from "next/router";
import { Fragment } from "react";

export default function FilteredEvents() {
  const router = useRouter();
  const filterData = router.query.slug;

  if (!filterData) {
    return (
      <ErrorAlert>
        <p>Loading...</p>
      </ErrorAlert>
    );
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];
  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2022 ||
    numYear < 2021 ||
    numMonth > 12 ||
    numMonth < 1
  ) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>Invalid Search, Please adjust Your Search Terms</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  const FilteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!FilteredEvents || FilteredEvents.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>Sorry, No Events Matches Your Search</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  const date = new Date(numYear, numMonth - 1);

  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList events={FilteredEvents} />
    </Fragment>
  );
}
