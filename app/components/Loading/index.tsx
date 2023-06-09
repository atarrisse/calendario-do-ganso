import styles from "./Loading.module.css";

import { TLoading } from "@/types";

const Loading = ({ loading }: TLoading) => {
  if (!loading) return null;

  return (
    <div className={styles.load}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loading;

