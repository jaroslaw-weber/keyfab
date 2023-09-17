interface Position {
  x: number;
  y: number;
  /**
   * degrees
   */
  rotation?: number;
}

interface KeyboardType {
  name: string;
  /**
   * key positions
   */
  positions: Position[];
}

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

interface SpecialKey {
  index: number;
  /**
   * define which keys are special keys.
   * css class .special-key-1 => 1
   * css class .special-key-2 => 2
   * etc.
   */
  category: number;
}
