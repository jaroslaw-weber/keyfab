import { validatePhysicalLayout } from "../service/physical";
import { moonlander } from "./moonlander";
import { piantor } from "./piantor";

import planc from "../physical/planc.json";

const jsonLayouts = [planc]

for(const l of jsonLayouts){
validatePhysicalLayout(planc);
}

export const keyboardTypes: KeyboardType[] = [
  piantor,
  moonlander,
  //layouts from json
  ...jsonLayouts
];
