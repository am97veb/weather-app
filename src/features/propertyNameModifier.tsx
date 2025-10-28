export const propertyNameModifier = (property: string, title: string) => {
  switch (true) {
    case title.includes("air"):
      return property
        .toUpperCase()
        .replace("GB-DEFRA-INDEX", "Daily Air Quality Index")
        .replace("US-EPA-INDEX", "US EPA Index")
        .replaceAll("_", ".");
    case title.includes("sun and moon"):
      return property.replaceAll("_", " ");
    case title.includes("uv"):
      return property.replace("uv", "UV");

    default:
      return property;
  }
};