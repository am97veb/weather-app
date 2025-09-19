export const dateFormatter = (date: string) =>
    new Date(date).
        toLocaleDateString(undefined, {
            day: "2-digit",
            month: "2-digit" 
        });