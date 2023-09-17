//next js component:

import { useAtom } from "jotai";
import {
  EditMode,
  editModeAtom,
  keyboardTypeAtom,
  layersAtom,
  selectedKeyAtom,
} from "../state";

export default function KeyboardKey(props: {
  index: number;
  layerIndex: number;
}) {
  const { index, layerIndex } = props;

  const [layers, setLayers] = useAtom(layersAtom);
  const [editMode] = useAtom(editModeAtom);
  const [keyboardType] = useAtom(keyboardTypeAtom);
  const [_, selectKey] = useAtom(selectedKeyAtom);
  if (!layers) {
    return <div />;
    throw new Error("No layers found");
  }

  const layer = layers[layerIndex];
  if (!layer) {
    return <div />;
  }
  const position = keyboardType.positions[index];
  if (!position) {
    return <div />;
  }

  const v: string = layer?.legends?.[index] ?? "";

  const spacingMultiplier = keyboardType.spacing;
  const keySize = keyboardType.keySize;
  const top = position.y * spacingMultiplier + "rem";
  const left = position.x * spacingMultiplier + "rem";

  const rotation = position.rotation ?? 0;
  const rotate = `rotate(${rotation}deg)`;

  const category = layer.specialKeys?.find((x) => x.index == index)?.category;

  let keyClass = "key";
  if (category && category > 0) {
    keyClass += ` key-special-${category}`;
  } else {
    keyClass += ` key-basic`;
  }

  if (v == null || v == "") {
    keyClass += " key-empty";
  }

  //if edit mode is 'input' allow to edit label
  let keyElem = (
    <textarea
      className="m-auto text-center mx-auto stealthy w-full h-full"
      value={v}
      onChange={(e) => {
        const newLayers = [...layers];
        newLayers[layerIndex].legends[index] = e.target.value;
        setLayers(newLayers);
      }}
      onClick={() => {
        //select this key
        selectKey({
          keyIndex: index,
          layerIndex: layerIndex,
        });
      }}
    ></textarea>
  );
  //if edit mode is 'select', allow to select key
  if (!editMode) {
    keyElem = (
      <button
        className={" m-auto text-center mx-auto w-full h-full"}
        onClick={() => {
          //select this key
          selectKey({
            keyIndex: index,
            layerIndex: layerIndex,
          });
        }}
      >
        {v}
      </button>
    );
  }
  return (
    <div
      className={keyClass + " flex justify-center"}
      style={{
        position: "absolute",
        top,
        left,
        transform: rotate,
        height: keySize + "rem",
        width: keySize + "rem",
      }}
    >
      {keyElem}
    </div>
  );
}
