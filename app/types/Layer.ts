

/**
 * single layer of a keyboard
 */

 interface Layer {
  name: string;
  legends: (string | null)[];
  order: number;
  /**
   *
   */
  specialKeys?: SpecialKey[];
}
