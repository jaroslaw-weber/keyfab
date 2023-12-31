import { cloneDeep } from "lodash";

const empty:Layer = {
	name: 'layer',
	legends:[],
	order:10,
	specialKeys:[]
}
export const defaultUserLayout: Layer[] = [
  {
    name: "base",
    legends: [
      "esc",
      "w",
      "l",
      "y",
      "p",
      "k",
      "z",
      "x",
      "o",
      "u",
      "",
      "lang",
      "delete",
      "c",
      "r",
      "s",
      "t",
      "b",
      "f",
      "n",
      "e",
      "i",
      "a",
      "",
      "ray\ncast",
      "q",
      "j",
      "v",
      "d",
      "g",
      "m",
      "h",
      ".",
      ",",
      "",
      "",
      "vs\ncode\nnav",
      "nav",
      "space",
      "osm shift",
      "sym\n/\nnum",
      "",
    ],
    order: 0,
    specialKeys: [
      { index: 0, category: 1 },
      { index: 37, category: 2 },
      { index: 40, category: 2 },
      { index: 11, category: 2 },
      { index: 38, category: 1 },
      { index: 39, category: 1 },
      { index: 36, category: 2 },
      { index: 12, category: 1 },
      { index: 24, category: 2 },
    ],
  },
  {
    name: "combo",
    legends: [
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      "tab",
      "tab",
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      "",
      "",
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      "enter",
      "enter",
      null,
      "",
      "",
    ],
    order: 3,
    specialKeys: [
      { index: 22, category: 1 },
      { index: 23, category: 1 },
      { index: 35, category: 1 },
      { index: 34, category: 1 },
      { index: 32, category: 1 },
      { index: 31, category: 1 },
      { index: 8, category: 1 },
      { index: 7, category: 1 },
    ],
  },
  {
    name: "home row mods",
    legends: [
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      "",
      "",
      "",
      null,
      null,
      null,
      "option",
      "ctrl",
      "cmd",
      null,
      null,
      "cmd",
      "ctrl",
      "option",
      null,
      null,
      null,
      null,
      null,
      null,
      "",
      "",
      "",
    ],
    order: 5,
    specialKeys: [
      { index: 8, category: 2 },
      { index: 9, category: 2 },
      { index: 10, category: 2 },
      { index: 30, category: 2 },
      { index: 29, category: 2 },
      { index: 28, category: 2 },
      { index: 21, category: 2 },
      { index: 20, category: 2 },
      { index: 19, category: 2 },
      { index: 16, category: 2 },
      { index: 15, category: 2 },
      { index: 14, category: 2 },
    ],
  },
  {
    name: "symbols",
    legends: [
      "",
      "]",
      ">",
      "}",
      ")",
      "&",
      "|",
      '"',
      "'",
      "`",
      "",
      "",
      null,
      "[",
      "<",
      "{",
      "(",
      "=",
      "@",
      ";",
      ":",
      "?",
      "!",
      "",
      "",
      null,
      "*",
      "/",
      "-",
      "+",
      "$",
      "#",
      "%",
      "_",
      "",
      "",
      "",
      null,
      null,
      null,
      "osm",
    ],
    order: 2,
    specialKeys: [{ index: 40, category: 2 }],
  },
  {
    name: "numbers",
    legends: [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      null,
      "7",
      "5",
      "3",
      "1",
      "9",
      "8",
      "0",
      "2",
      "4",
      "6",
      null,
      null,
      null,
      null,
      "",
      "",
      "",
      "",
      "",
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      "hold",
    ],
    order: 1,
    specialKeys: [{ index: 40, category: 2 }],
  },
  {
    name: "navigation",
    legends: [
      null,
      null,
      "select all",
      "chrome\ndev\ntools",
      "find",
      null,
      null,
      "home",
      "up",
      "end",
      "",
      null,
      null,
      "screen\nshot",
      "save",
      "vs \ncode\naction",
      "right\nmouse\nclick",
      null,
      null,
      "left",
      "down",
      "right",
      "",
      "",
      "",
      null,
      "cut",
      "copy",
      "paste",
      "",
      "",
      null,
      null,
      null,
      null,
      null,
      null,
      "hold",
    ],
    order: 4,
    specialKeys: [
      { index: 23, category: 1 },
      { index: 29, category: 1 },
      { index: 22, category: 1 },
      { index: 24, category: 1 },
      { index: 30, category: 1 },
      { index: 10, category: 2 },
      { index: 2, category: 2 },
      { index: 3, category: 2 },
      { index: 4, category: 2 },
      { index: 16, category: 2 },
      { index: 15, category: 2 },
      { index: 14, category: 2 },
      { index: 9, category: 1 },
      { index: 13, category: 2 },
      { index: 7, category: 1 },
      { index: 37, category: 2 },
      { index: 27, category: 2 },
      { index: 26, category: 2 },
      { index: 28, category: 2 },
      { index: 20, category: 1 },
      { index: 21, category: 1 },
      { index: 8, category: 1 },
      { index: 19, category: 1 },
    ],

  },
  cloneDeep(empty),
  cloneDeep(empty),
  cloneDeep(empty),
  cloneDeep(empty),
  cloneDeep(empty),
  cloneDeep(empty),
];
