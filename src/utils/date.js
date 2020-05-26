import format from "date-fns/format";

export function formatNamedDate(date) {
  return format(date, "d, MMMM yyyy");
}
