
import styles from "./Event.module.css";

import GoogleCalendarButton from "../AddToCalendarButton";

import { TEvent } from "../../types";

const Event = ({ title, datetime, content }: TEvent) => {
  return (
    <li className={styles.event}>
      <h2>{title}</h2>
      <p>{datetime}</p>
      <p className={styles.description}>{content}</p>
        <hr />
      <div className={styles.buttons}>
        <GoogleCalendarButton />
      </div>
    </li>
  );
};

export default Event;
