export const dateFormatter = (date: string) =>
    new Date(date).
        toLocaleDateString("en-EN", {
            weekday: "long",
        });