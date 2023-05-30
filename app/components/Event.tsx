import { TEvent } from "../../types";

const Event = ({ title, datetime, content, ...props }: TEvent) => {
  return (
    <li className="flex flex-col mb-8" {...props}>
      <h2>{title}</h2>
      <p>{datetime}</p>
      <p>{content}</p>
    </li>
  );
};

export default Event;
