// Extract types with as const

// As const turn the object into a readonly object
const BUTTON_TYPES = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  TERTIARY: "tertiary",
} as const;

BUTTON_TYPES["PRIMARY"] = "readonly"; // Error: Cannot assign to 'PRIMARY' because it is a read-only property

type ButtonTypes = typeof BUTTON_TYPES;

type TypesKeys = keyof ButtonTypes;
type TypesValues = ButtonTypes[TypesKeys];
