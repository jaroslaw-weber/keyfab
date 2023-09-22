import { useAtom } from "jotai";
import {
  Step,
  keyboardTypeAtom,
  layersAtom,
  selectedKeyAtom,
  stepAtom,
} from "../state";
import KeyboardKey from "./KeyboardKey";
import { useEffect } from "react";

export function EditKeyPanel() {
  const [key] = useAtom(selectedKeyAtom);
  const [layers, setLayers] = useAtom(layersAtom);
  const [step] = useAtom(stepAtom);
  const layer = layers[key.layerIndex];
  const label: string | null = layers[key.layerIndex]?.legends[key.keyIndex];

  const [keyboardType, setKeyboardType] = useAtom(keyboardTypeAtom);

  const position = keyboardType.positions[key.keyIndex];
  function setPosition(p: { x: number; y: number }) {
    keyboardType.positions[key.keyIndex] = p;
    setKeyboardType(keyboardType);
  }
/*
  //
  useEffect(() => {
  let pressed = false;
    const pp = keyboardType.positions[key.keyIndex];
    console.log('mounting')
    const handleKeyDown = (e) => {
      //const pp = position
      const k = key
      if (pressed) return;
      switch (e.key) {
        case "ArrowUp": {
          const p = {
            x: pp.x,
            y: pp.y - 1,
          };

          keyboardType.positions[k.keyIndex] = p;
          console.log("pos", p);
          setKeyboardType(keyboardType);
          pressed = true;
          break;
        }
        case "ArrowDown": {
          const p = {
            x: pp.x,
            y: pp.y + 1,
          };

          keyboardType.positions[k.keyIndex] = p;
          console.log("pos", p);
          setKeyboardType(keyboardType);
          pressed = true;
          break;
        }
        case "ArrowLeft": {
          const p = {
            x: pp.x - 1,
            y: pp.y,
          };

          keyboardType.positions[k.keyIndex] = p;
          console.log("pos", p);
          setKeyboardType(keyboardType);
          pressed = true;
          break;
        }
        case "ArrowRight": {
          const p = {
            x: pp.x + 1,
            y: pp.y,
          };

          keyboardType.positions[k.keyIndex] = p;
          console.log("pos", p);
          setKeyboardType(keyboardType);
          pressed = true;
          break;
        }

        default:
          break;
      }
    };
    const handleKeyUp = (e) => {
      pressed = false;
    }
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      console.log('unmounting');
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup",handleKeyUp);
    };
  }, [position,key, keyboardType.positions, key.keyIndex, setKeyboardType]);
*/
  if (step != Step.keyType) return null;
  //

  function setCategory(v: string) {
    const n = Number(v);
    if (!layer.specialKeys) {
      layer.specialKeys = [];
    }
    //remove special key
    layer.specialKeys = layer.specialKeys.filter(
      (x) => x.index != key.keyIndex
    );
    if (n > 0) {
      layer.specialKeys.push({
        index: key.keyIndex,
        category: n,
      });
    }
    setLayers([...layers]);
  }

  const category =
    layer.specialKeys?.find((x) => x.index == key.keyIndex)?.category ?? 0;

  const result = (
    <div className="card bg-base-100 shadow-xl sticky top-24">
      <div className="card-body">
        <h2 className="card-title justify-center">Selected Key</h2>
        <div></div>
        <div className="card-actions justify-center">
          <kbd className="kbd">{label}</kbd>
        </div>
        <select
          className="select select-bordered w-full max-w-xs mt-2"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="0">Basic Key</option>
          <option value="1">Special Key 1</option>
          <option value="2">Special Key 2</option>
        </select>
      </div>
    </div>
  );
  return result;
}
