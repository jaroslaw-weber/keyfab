
import { CSSProperties } from "react";

export function parseCssString(cssString: string): CSSProperties {
  const styleObj:any= {};
  const declarations = cssString.split(";");

  for (const declaration of declarations) {
    const [property, value] = declaration.split(":");
    if (property && value) {
      styleObj[property.trim()] = value.trim();
    }
  }

  return styleObj;
}
