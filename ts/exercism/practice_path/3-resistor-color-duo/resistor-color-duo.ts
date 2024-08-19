export function decodedValue(colors: string[]): number {
  let str = colors
    .slice(0, 2)
    .map((color) => COLORS.indexOf(color))
    .join("");
  return Number(str);
}

export const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
];
