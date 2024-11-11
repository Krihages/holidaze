import { parse } from "date-fns";

export default function dateParse(date: string) {
  const [from, to] = date.split("-");
  return {
    from: parse(from, "d.MM.yy", new Date()),
    to: parse(to, "d.MM.yy", new Date()),
  };
}
