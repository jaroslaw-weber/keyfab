import { useAtom } from "jotai";
import { useEffect } from "react";
import {
  Step,
  keyboardTypeAtom,
  layersAtom,
  selectedKeyAtom,
  stepAtom,
} from "../state";
import _ from "lodash";

export function MoveKey() {
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
  //
  useEffect(() => {
    let pressed = false;
    const pp = position;
    console.log("mounting");
    const handleKeyDown = (e: KeyboardEvent) => {
      if (step != Step.move) {
        return null;
      }
      const kt = { ...keyboardType };
      //const pp = position
      const k = key;
      //if (pressed) return;
      switch (e.key) {
        case "ArrowUp": 
		case "w":
		{
          e.preventDefault();

          pp.y -= 0.1;

          kt.positions[k.keyIndex] = pp;
          setKeyboardType(kt);
          pressed = true;
          break;
        }
	
        case "ArrowDown": 
		case "s":{
          e.preventDefault();
          pp.y += 0.1;

          kt.positions[k.keyIndex] = pp;
          setKeyboardType(kt);
          pressed = true;
          break;
        }
        case "ArrowLeft": 
		case "a":{
          pp.x -= 0.1;

          kt.positions[k.keyIndex] = pp;
          console.log("pos", pp);
          setKeyboardType(kt);
          pressed = true;
          break;
        }

        case "ArrowRight": 
		case "d":{
          pp.x += 0.1;

          kt.positions[k.keyIndex] = pp;
          console.log("pos", pp);
          setKeyboardType(kt);
          pressed = true;
          break;
        }
        case "e": {
          if (!pp.rotation) {
            pp.rotation = 0;
          }
          pp.rotation += 10;
          kt.positions[k.keyIndex] = pp;
          console.log("pos", pp);
          setKeyboardType(kt);
          pressed = true;
          break;
        }
        case "q": {
          if (!pp.rotation) {
            pp.rotation = 0;
          }
          pp.rotation -= 10;
          kt.positions[k.keyIndex] = pp;
          console.log("pos", pp);
          setKeyboardType(kt);
          pressed = true;
          break;
        }
		case "n":{
			//add new key (position)
			const lastPosition = _.last( keyboardType.positions)
			const newPosition = {
				...lastPosition
			}
			newPosition.x+=1
			kt.positions.push(newPosition)
			setKeyboardType(kt)
		}

        default:
          break;
      }
    };
    const handleKeyUp = (e: KeyboardEvent) => {
      pressed = false;
    };
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      console.log("unmounting");
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [key, keyboardType, position, setKeyboardType]);

  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title justify-center">Selected Key</h2>
          <div></div>
          <div className="card-actions justify-center">
            <kbd className="kbd">{label}</kbd>
          </div>
        </div>
      </div>
      <div className="card bg-base-100 shadow-xl mt-4">
        <div className="card-body">
          <h2 className="card-title justify-center">Shortcuts</h2>
          <div></div>
          <p>Move key:</p>
          <div className="card-actions justify-center">
            <kbd className="kbd"> ↑ ↓ ← → </kbd>
          </div>
			
          <div className="card-actions justify-center">
			<kbd className="kbd"> w s a d </kbd>
          </div>
          <p>Rotate left:</p>
          <div className="card-actions justify-center">
            <kbd className="kbd">q</kbd>
          </div>
          <p>Rotate right:</p>
          <div className="card-actions justify-center">
            <kbd className="kbd">e</kbd>
          </div>
		  <p>Add key:</p>
		  <div className="card-actions justify-center">
            <kbd className="kbd">n</kbd>
          </div>
        </div>
      </div>
    </div>
  );
}
