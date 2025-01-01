import { useAtom } from "jotai";
import {
  Step,
  stepAtom,
  currentKeyboardLayoutAtom,
} from "../state";
import * as htmlToImage from "html-to-image";
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from "html-to-image";

export function Print() {
  const [step] = useAtom(stepAtom);
  const [currentKeyboardLayout, setCurrentKeyboardLayout] = useAtom(
    currentKeyboardLayoutAtom
  );
  const show = step == Step.preview;

  const printPng = () => {
        const node = document.getElementById("keyboardView");
        toPng(node)
            .then(function (dataUrl) {
            const downloadLink = document.createElement("a");
            downloadLink.download = currentKeyboardLayout.name + ".png";
            downloadLink.href = dataUrl;
            downloadLink.click();
        })
  };

  const printSvg = () => {
        const node = document.getElementById("keyboardView");
        toSvg(node)
            .then(function (dataUrl) {
            const downloadLink = document.createElement("a");
            downloadLink.download = currentKeyboardLayout.name + ".svg";
            downloadLink.href = dataUrl;
            downloadLink.click();
        })
  };

  return show && <div className="card bg-base-100 shadow-xl">
    <div className="card-body">
      <h2 className="card-title justify-center">Print</h2>
      <div></div>
      <div className="card-actions justify-center">
        <button className="btn btn-primary" onClick={printPng}>PNG</button>
        <button className="btn btn-primary" onClick={printSvg}>SVG</button>
      </div>
    </div>
  </div>;
}
