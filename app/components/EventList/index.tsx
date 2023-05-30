import Event from "../Event";

import styles from "./EventList.module.css";

import { TEvent } from "../../../types";

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
