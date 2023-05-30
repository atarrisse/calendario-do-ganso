"use client";

import { useState } from "react";

import EventList from "./components/EventList";
import Form from "./components/Form";

import styles from "./page.module.css";

export default function Home() {
  const [events, setEvents] = useState<TEvent[]>([]);

  return (
    <main className={styles.main}>
      <Form setEvents={setEvents} />
      {events.length > 0 && (
        <section className="mt-16">
          <EventList events={events} />
        </section>
      )}
    </main>
  );
}
