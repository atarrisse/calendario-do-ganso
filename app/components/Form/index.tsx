"use client";

import { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";

import { API_ROUTE } from "../../../utils/constants";

import styles from "./form.module.css";

type TForm = {
  setEvents: Dispatch<SetStateAction<TEvent[]>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
};

const Form = ({ setEvents, setLoading }: TForm) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: any) => {
    setLoading(true);
    setEvents([]);
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
        setLoading(false);
        setEvents(response);
      });
    } catch (e) {
      setLoading(false);
      throw new Error("Couldn't get events from page");
    }
  };

  return (
    <form className={styles.form} name="form" onSubmit={handleSubmit(onSubmit)}>
      <label className="sr-only" htmlFor="url">
        Website
      </label>
      <input
        className={styles.input}
        defaultValue="https://mitvergnuegen.com/2023/wochenende-mai-berlin-tipps/"
        type="text"
        {...register("url")}
      />
      <input className={styles.submit} type="submit" value="🪿  🗣️" />
    </form>
  );
};

export default Form;
