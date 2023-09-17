const positions: Position[] = [
  //left
  //row 1
  { x: 0, y: 0.9 },
  { x: 1, y: 0.9 },
  { x: 2, y: 0.6 },
  { x: 3, y: 0.3 },
  { x: 4, y: 0.3 },
  { x: 5, y: 0.6 },
  //row 2
  { x: 0, y: 1.9 },
  { x: 1, y: 1.9 },
  { x: 2, y: 1.6 },
  { x: 3, y: 1.3 },
  { x: 4, y: 1.3 },
  { x: 5, y: 1.6 },
  //row 3
  { x: 0, y: 2.9 },
  { x: 1, y: 2.9 },
  { x: 2, y: 2.6 },
  { x: 3, y: 2.3 },
  { x: 4, y: 2.3 },
  { x: 5, y: 2.6 },
  //thumb keys
  {
    x: 3,
    y: 3.8,
    //rotation: -10,
  },
  {
    x: 4,
    y: 4,
    //rotation: -10,
  },
  {
    x: 5,
    y: 4.2,
    //rotation: -10,
  },
  //right
  //first row
  {x: 7, y: 0.6},
  {x: 8, y: 0.3},
  {x: 9, y: 0.3},
  {x: 10, y: 0.6},
  {x: 11, y: 0.9},
  {x: 12, y: 0.9},
  //second row
  {x: 7, y: 1.6},
  {x: 8, y: 1.3},
  {x: 9, y: 1.3},
  {x: 10, y: 1.6},
  {x: 11, y: 1.9},
  {x: 12, y: 1.9},
  //third row
  {x: 7, y: 2.6},
  {x: 8, y: 2.3},
  {x: 9, y: 2.3},
  {x: 10, y: 2.6},
  {x: 11, y: 2.9},
  {x: 12, y: 2.9},
  //thumb keys
  {
    x: 7,
    y: 4.2,
    //rotation: 10,
  },
  {
    x: 8,
    y: 4,
    //rotation: 10,
  },
  {
    x: 9,
    y: 3.8,
    //rotation: 10,
  },
];

export const piantor: KeyboardType = {
  name: "piantor",
  positions,
};
