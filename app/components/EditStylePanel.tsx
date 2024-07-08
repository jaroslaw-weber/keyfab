import { useAtom } from "jotai";
import { Step, stepAtom, styleAtom as styleAtom } from "../state";
import { formatCss, styles } from "../style";
import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { css } from "@codemirror/lang-css";

import { materialLight } from "@uiw/codemirror-theme-material";

export function EditStylePanel() {
  const [style, setStyle] = useAtom(styleAtom);
  const [step] = useAtom(stepAtom);

  const show = step === Step.style;

  const styleItems = [];
  for (const style of styles) {
    const styleItem = (
      <option
        value={style.name}
        onSelect={(e) => {
          const name = e.currentTarget.value;
          const style = styles.find((s) => s.name === name);
          if (!style) {
            throw new Error("style not found");
          }
          setStyle(style);
        }}
        key={style.name}
      >
        {style.name}
      </option>
    );
    styleItems.push(styleItem);
  }
  const selectStyle = (
    <select
      className="select select-bordered w-full max-w-xs my-2"
      value={style.name}
      onChange={(e) => {
        const selected = styles.find((x) => x.name == e.target.value);
        if (!selected) return;
        setStyle(selected);
      }}
    >
      {styleItems}
    </select>
  );
  const cssEditor = (
    <CodeMirror
      className="w-full max-w-xl rounded"
      value={style.css}
      height="20rem"
      theme={materialLight}
      extensions={[css()]}
      onChange={(val, viewUpdate) => {
        const newStyle = { ...style };
        newStyle.css = val;
        setStyle(newStyle);
      }}
    />
  );

  const textarea = (
    <textarea
      className="textarea textarea-bordered"
      placeholder="Input your CSS here"
      onChange={(e) => {
        const newStyle = {
          ...style,
          css: e.target.value,
        };
        setStyle(newStyle);
      }}
      value={style.css}
      rows={10}
    ></textarea>
  );
  const formatCssButton = (
    <button
      className="btn"
      onClick={(e) => {
        const newStyle = {
          ...style,
        };
        newStyle.css = formatCss(newStyle.css);
        setStyle(newStyle);
      }}
    >
      prettify
    </button>
  );
  const card = (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title justify-center">Style</h2>
        <div></div>
        {selectStyle}
        {cssEditor}
        {formatCssButton}
        <div className="card-actions justify-center"></div>
      </div>
    </div>
  );
  return show && card;
}
