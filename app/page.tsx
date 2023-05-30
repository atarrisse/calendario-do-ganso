"use client";

import { useState } from "react";

import EventList from "./components/EventList";
import Form from "./components/Form";
import Loading from "./components/Loading";

import styles from "./page.module.css";

export default function Home() {
  const [events, setEvents] = useState<TEvent[]>([]);
  const [loading, setLoading] = useState(false);

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>🤖 🪿</h1>
      <Form setEvents={setEvents} setLoading={setLoading}/>
      <Loading loading={loading}/>
      {events.length > 0 && (
        <section className="mt-16">
          <EventList events={events} />
        </section>
      )}
    </main>
  );
}
