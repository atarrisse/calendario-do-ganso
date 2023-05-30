import { Dispatch, SetStateAction } from "react";

declare type TEvent = {
  title: string;
  content: string;
  datetime: string;
};

declare type TForm = {
  setEvents: Dispatch<SetStateAction<TEvent[]>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
};

declare type TLoading = {
  loading: boolean;
};