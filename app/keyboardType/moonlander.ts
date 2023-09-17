import { sameRowButLower } from "./utils";

const row1: Position[] = [
  {
    x: 0,
    y: 0.5,
  },
  { x: 1, y: 0.4 },
  { x: 2, y: 0.3 },
  { x: 3, y: 0.3 },
  { x: 4, y: 0.2 },
  { x: 5, y: 0.2 },
  { x: 6, y: 0.3 },
  //

  { x: 9, y: 0.3 },
  { x: 10, y: 0.2 },
  { x: 11, y: 0.2 },
  { x: 12, y: 0.3 },
  { x: 13, y: 0.3 },
  { x: 14, y: 0.4 },
  { x: 15, y: 0.5 },
];

const row2 = sameRowButLower(row1);
const row3 = sameRowButLower(row2);
const row4 = sameRowButLower(row3).filter((p) => p.x < 6 || p.x > 10);
const row5 = sameRowButLower(row4).filter((p) => p.x < 5 || p.x > 11);
const thumbs: Position[] = [
  {
    x: 5.8,
    y: 4.6,
    rotation: 20,
  },
  {
    x: 5,
    y: 5.4,
    rotation: 20,
  },
  {
    x: 6,
    y: 5.8,
    rotation: 20,
  },
  {
    x: 7,
    y: 6.2,
    rotation: 20,
  },//
  {
    x: 10.2,
    y: 4.6,
    rotation: -20,
  },
  {
    x: 9,
    y: 6.2,
    rotation: -20,
  },
  {
    x: 10,
    y: 5.8,
    rotation: -20,
  },
  {
    x: 11,
    y: 5.4,
    rotation: -20,
  }
];

const positions: Position[] = [
  ...row1,
  ...row2,
  ...row3,
  ...row4,
  ...row5,
  ...thumbs,
];
export const moonlander: KeyboardType = {
  name: "moonlander",
  positions,
  spacing: 2.4,
  keySize: 2.2,
};
