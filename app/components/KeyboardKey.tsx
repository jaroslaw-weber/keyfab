//next js component:

import { useAtom } from "jotai";
import { keyCssPropertiesAtom } from "../state";

export default function KeyboardKey(props: {
  position: Position;
  style: KeyStyle;
  label: string;
  layer: Layer;
  keyboard: Keyboard;
}) {
  const { position, style, label, layer, keyboard } = props;

  const [keyCssProperties]=useAtom(keyCssPropertiesAtom)
  const { spacingMultiplier } = keyboard;
  const spacing = layer.order * 20;
  /*
  console.log('spacing', spacing);
  console.log('position', position)
  console.log('label', label)
  */
  const top = (position.y + 1) * spacingMultiplier + spacing + "rem";
  // console.log('top',top)
  const left = (position.x + 1) * spacingMultiplier + "rem";

  const rotation = position.rotation ?? 0;
  const rotate = `rotate(${rotation}deg)`;
  console.log('keyCssProperties', keyCssProperties)
  return (
    <div
      className=""
      style={{
        position: "absolute",
        top,
        left,
        transform: rotate,
        ...keyCssProperties,
      }}
    >
      <p className={style.pTailwind}> {label}</p>
    </div>
  );
}
