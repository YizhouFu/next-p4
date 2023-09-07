import { getFeaturedEvents } from "@/dummy_events";

export default function Home() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <h1>The Home Page</h1>
    </div>
  );
}
