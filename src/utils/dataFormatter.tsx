export const dateToWeekday = (date: string) =>
  new Date(date).toLocaleDateString("en-EN", {
    weekday: "long",
  });

export const dateToHour = (date: string) =>
  new Date(date).toLocaleTimeString(undefined, {
    hour: "numeric",
  });

export const dateToCompare = (date: string | Date) =>
  new Date(date).getTime();
