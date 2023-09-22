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
import { useState } from "react";

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
        className="m-auto text-center mx-auto stealthy w-full h-full"
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
        className={" m-auto text-center mx-auto w-full h-full"}
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
  const isSelected = key.keyIndex == index
  const showArrows = isSelected && step == Step.move;

  function getArrowButton(arrow:string, xChange:number) {return  <button onClick={
    (e) => {   const newKeyboardType = { ...keyboardType }; // Create a shallow copy
    newKeyboardType.positions[index].x += xChange; // Update the copy
    setKeyboardType(newKeyboardType); // Update the state with the copy
 
    }
  }>{arrow}</button>
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
      {showArrows? getArrowButton('←', -0.1) : null}
      {keyElem}
      {showArrows? getArrowButton('→', +0.1) : null}
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
