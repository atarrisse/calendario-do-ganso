"use client"

import { useForm } from "react-hook-form";
import styles from "./page.module.css";

export default function Home() {
  const { register, handleSubmit } = useForm();

  const makeApiCall  = async (url: string) => {
    await fetch("/api/test", {
      method: "POST",
      body: JSON.stringify({ url }),
    })
  }

  const onSubmit = async (data: any) => {
    if (!data.url) {
      throw new Error("No url provided");
    }

    const url = data.url;
    const info = await makeApiCall(url);
    console.log('debug', info);
  };

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Hi</h1>
      <form name="form" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="url">Website</label>
        <input type="text" {...register("url")} />
        {/* <Input size="lg" type="text" id="url" /> */}
        <input type="submit" />
      </form>
    </main>
  );
}
