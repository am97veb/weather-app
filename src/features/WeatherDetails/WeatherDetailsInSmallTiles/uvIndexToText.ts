export const uvIndexToText = (uv: number) => {
  if (uv <= 2) return "Low";
  if (uv >= 3 && uv <= 5) return "Moderate";
  if (uv >= 6 && uv <= 7) return "High";
  if (uv >= 8 && uv <= 10) return "Very High";
  if (uv >= 11) return "Extreme";
};