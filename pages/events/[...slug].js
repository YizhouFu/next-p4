import EventList from "@/components/events/event_list";
import ResultsTitle from "@/components/events/results-title";
import Button from "@/components/ui/button";
import ErrorAlert from "@/components/ui/error-alert";
//import { getFilteredEvents } from "@/helpers/api-util";
import { useRouter } from "next/router";
import { Fragment, useState, useEffect } from "react";
import useSWR from "swr";

export default function FilteredEvents(props) {
  const [loadedEvents, setLoadedEvents] = useState();

  const router = useRouter();
  const filterData = router.query.slug;

  const { data, error } = useSWR(
    'https://next-course-fetching-default-rtdb.firebaseio.com/events.json',
    (url) => fetch(url).then((res) => res.json())
  );

  console.log(filterData);
  console.log(data);

  useEffect(() => {
    if (data) {
      const eventlist = [];

      for (const key in data) {
        eventlist.push({
          id: key,
          ...data[key],
        });
      }
      console.log(eventlist);
      setLoadedEvents(eventlist);
    }
  }, [data]);

  console.log(loadedEvents);

  if (!loadedEvents) {
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
    // props.hasError
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2022 ||
    numYear < 2021 ||
    numMonth > 12 ||
    numMonth < 1 ||
    error
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

  const filteredEvents = loadedEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === numYear &&
      eventDate.getMonth() === numMonth - 1
    );
  });


  // const filteredEvents = props.events;
  // const FilteredEvents = getFilteredEvents({
  //   year: numYear,
  //   month: numMonth,
  // });

  if (!filteredEvents || filteredEvents.length === 0) {
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
      <EventList events={filteredEvents} />
    </Fragment>
  );
}

// export async function getServerSideProps(context) {
//   const { params } = context;
//   const filterData = params.slug;

//   const filteredYear = filterData[0];
//   const filteredMonth = filterData[1];
//   const numYear = +filteredYear;
//   const numMonth = +filteredMonth;

//   if (
//     isNaN(numYear) ||
//     isNaN(numMonth) ||
//     numYear > 2022 ||
//     numYear < 2021 ||
//     numMonth > 12 ||
//     numMonth < 1
//   ) {
//     return {
//       props: { hasError: true },
//       // notFound: true,
//       // redirect:{
//       //   //if you have an error page
//       //   destination: '/error'
//       // }
//     };
//   }

//   const FilteredEvents = await getFilteredEvents({
//     year: numYear,
//     month: numMonth,
//   });

//   if (!FilteredEvents || FilteredEvents.length === 0) {
//     return (
//       <Fragment>
//         <ErrorAlert>
//           <p>Sorry, No Events Matches Your Search</p>
//         </ErrorAlert>
//         <div className="center">
//           <Button link="/events">Show All Events</Button>
//         </div>
//       </Fragment>
//     );
//   }

//   return {
//     props: {
//       events: FilteredEvents,
//       date: {
//         year: numYear,
//         month: numMonth,
//       },
//     },
//   };
// }
