import Event from "./Event";

import { TEvent } from "../../types";

const EventList = ({ events }: { events: TEvent[] }) => {
  return (
    <ul className="list-none m0 p0">
      {events.map((event) => (
        <Event key={event.datetime} {...event} />
      ))}
    </ul>
  );
};

export default EventList;
