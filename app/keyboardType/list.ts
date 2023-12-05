import { validatePhysicalLayout } from "../service/physical";
import { moonlander } from "./moonlander";
import { piantor } from "./piantor";

import planc from "../physical/planc.json";
import ansi104 from "../physical/ansi104.json";
import iso105 from "../physical/iso105.json";
import sixtyPercent from "../physical/sixtyPercent.json";
import jd40 from "../physical/jd40.json";
import keycool84 from "../physical/keycool84.json";

const jsonLayouts = [
  //layouts from json
  planc,
  ansi104,
  iso105,
  sixtyPercent,
  jd40,
  keycool84
];

for (const l of jsonLayouts) {
  validatePhysicalLayout(planc);
}

export const keyboardTypes: KeyboardType[] = [
  piantor,
  moonlander,
  //layouts from json
  ...jsonLayouts,
];
