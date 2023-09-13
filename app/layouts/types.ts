

interface Position {
  x: number;
  y: number;
  /**
   * degrees
   */
  rotation?:number;
}

interface PageStyle{
	tailwind?:string;
	css?:string
}

interface KeyStyle {
  css?:string;
  pTailwind?: string;
  tailwind?: string;
  /**
   * bigger = more space between keys
   */
  spacingMultiplier?: number;

  font?: string;
}
interface Keyboard {
  name: string;
  /**
   * key positions
   */
  positions: Position[];
  spacingMultiplier: number;
}

/**
 * single layer of a keyboard
 */
interface Layer {
  name: string;
  legends: string[];
  order:number
}
