"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

import { API_ROUTE } from "./utils/constants";

import styles from "./page.module.css";

export default function Home() {
  const [events, setEvents] = useState([]);
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: any) => {
    if (!data.url) {
      throw new Error("No url provided");
    }

    const url = data.url;

    try {
      await fetch(API_ROUTE, {
        method: "POST",
        body: JSON.stringify({ url }),
      }).then(async (res) => {
        const response = await res.json();

        if (!response || response.length === 0)
          throw new Error("No events found");

        setEvents(events);
      });
    } catch (e) {
      throw new Error("Couldn't get events from page");
    }
  };

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Hi</h1>
      <form name="form" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="url">Website</label>
        <input
          defaultValue="https://mitvergnuegen.com/2023/wochenende-mai-berlin-tipps/"
          type="text"
          {...register("url")}
        />
        <input type="submit" />
      </form>
    </main>
  );
}
