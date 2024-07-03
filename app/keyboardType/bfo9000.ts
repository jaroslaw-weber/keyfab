import { sameRowButLower } from "./utils"

const row1 = [
    { x: 0, y: 0 },
    { x: 1, y: 0 },
    { x: 2, y: 0 },
    { x: 3, y: 0 },
    { x: 4, y: 0 },
    { x: 5, y: 0 },
    { x: 6, y: 0 },
    { x: 7, y: 0 },
    { x: 8, y: 0 },
    // end of left side, begginning of right side
    { x: 10, y: 0 },
    { x: 11, y: 0 },
    { x: 12, y: 0 },
    { x: 13, y: 0 },
    { x: 14, y: 0 },
    { x: 15, y: 0 },
    { x: 16, y: 0 },
    { x: 17, y: 0 },
    { x: 18, y: 0 },
]
const row2 = sameRowButLower(row1)
const row3 = sameRowButLower(row2)
const row4 = sameRowButLower(row3)
const row5 = sameRowButLower(row4)
const row6 = sameRowButLower(row5)


const positions: Position[] = [...row1, ...row2, ...row3, ...row4, ...row5, ...row6]

export const bfo9000: KeyboardType = {
    name: "BFO-9000",
    positions,
    spacing: 2.4,
    keySize: 2.2,
  };
