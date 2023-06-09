import Event from "../Event";

import { TEvent } from "@/types";

import styles from "./EventList.module.css";

const EventList = ({ events }: { events: TEvent[] }) => {
  return (
    <ul className={styles.eventList}>
      {events.map((event) => (
        <Event key={event.datetime} {...event} />
      ))}
    </ul>
  );
};

export default EventList;
