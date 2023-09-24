//next js component:

import { useAtom } from "jotai";
import {
  EditMode,
  Step,
  editModeAtom,
  keyboardTypeAtom,
  layersAtom,
  selectedKeyAtom,
  stepAtom,
} from "../state";
import { CSSProperties, useState } from "react";

export default function KeyboardKey(props: {
  index: number;
  layerIndex: number;
}) {
  const { index, layerIndex } = props;

  const [layers, setLayers] = useAtom(layersAtom);
  const [keyboardType, setKeyboardType] = useAtom(keyboardTypeAtom);
  const [key, selectKey] = useAtom(selectedKeyAtom);
  const [step] = useAtom(stepAtom);

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

  const label: string = layer?.legends?.[index] ?? "";

  const spacingMultiplier = keyboardType.spacing;
  const keySize = keyboardType.keySize;
  const top = position.y * spacingMultiplier + "rem";
  const left = position.x * spacingMultiplier + "rem";

  const rotation = position.rotation ?? 0;
  const rotate = `rotate(${rotation}deg)`;

  const category = layer.specialKeys?.find((x) => x.index == index)?.category;

  let keyClass = getKeyClass(category, label);

  //if edit mode is 'input' allow to edit label
  let keyElem = null;
  if (step == Step.input) {
    keyElem = (
      <textarea
        className="m-auto text-center mx-auto stealthy w-full h-full z-0"
        value={label}
        onChange={(e) => {
          const newLayers = [...layers];
          newLayers[layerIndex].legends[index] = e.target.value;
          setLayers(newLayers);
        }}
        //select all on focus so can quickly edit label
        onFocus={(e) => e.currentTarget.select()}
        onClick={() => {
          //select this key
          selectKey({
            keyIndex: index,
            layerIndex: layerIndex,
          });
        }}
      ></textarea>
    );
  } else {
    keyElem = (
      <button
        className={" m-auto text-center mx-auto w-full h-full absolute left-0 top-0 z-0"}
        onClick={() => {
          //select this key
          selectKey({
            keyIndex: index,
            layerIndex: layerIndex,
          });
        }}
      >
        {label}
      </button>
    );
  }
  const isSelected = key.keyIndex == index && key.layerIndex == layerIndex;
  if(isSelected && step == Step.move){
    keyClass +=' border border-red-500 border-8 rounded';
  }
  
  return (
    <div
      className={keyClass + " justify-center"}
      style={{
        position: "absolute",
        top,
        left,
        zIndex:0,
        transform: rotate,
        height: keySize + "rem",
        width: keySize + "rem",
      }}
    >
      {keyElem}
    </div>
  );
}
function getKeyClass(category: number | undefined, label: string) {
  let keyClass = "key";
  if (category && category > 0) {
    keyClass += ` key-special-${category}`;
  } else {
    keyClass += ` key-basic`;
  }

  if (label == null || label == "") {
    keyClass += " key-empty";
  }
  return keyClass;
}
