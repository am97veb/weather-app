export const checkKey = (key: string, value: number) =>
  key === "us-epa-index"
    ? airQualityUsEpaIndex(value)
    : key === "gb-defra-index"
    ? airQualityUkDefraIndex(value)
    : value;

const airQualityUsEpaIndex = (value: number) => {
  switch (value) {
    case 1:
      return "Good";
    case 2:
      return "Moderate";
    case 3:
      return "Unhealthy for sensitive group";
    case 4:
      return "Unhealthy";
    case 5:
      return "Very unhealthy";
    case 6:
      return "Hazardous";
  }
};

const airQualityUkDefraIndex = (value: number) => {
  switch (value) {
    case 1:
      return `Low
    (0-11 µg/m³)`;
    case 2:
      return `Low
    (12-23 µg/m³)`;
    case 3:
      return `Low
    (24-35 µg/m³)`;
    case 4:
      return `Moderate
    (36-41 µg/m³)`;
    case 5:
      return `Moderate
    (42-47 µg/m³)`;
    case 6:
      return `Moderate
    (48-53 µg/m³)`;
    case 7:
      return `High
    (54-58 µg/m³)`;
    case 8:
      return `High 
    (59-64 µg/m³)`;
    case 9:
      return `High 
    (65-70 µg/m³)`;
    case 10:
      return `Very high 
    (71 or more µg/m³)`;
  }
};
