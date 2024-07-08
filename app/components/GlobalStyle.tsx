import { useAtom } from "jotai";
import { styleAtom } from "../state";
import { useEffect, useInsertionEffect, useLayoutEffect } from "react";

export default function GlobalStyle() {
  const [css, setCss] = useAtom(styleAtom);
  //console.log("rendering global style:", css.css);
  return <style type="text/css">{css.css}</style>;
}
