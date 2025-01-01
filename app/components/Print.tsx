import { useAtom } from "jotai";
import {
  Step,
  stepAtom,
} from "../state";
import * as htmlToImage from "html-to-image";
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from "html-to-image";

export function Print() {
  const [step] = useAtom(stepAtom);
  const show = step == Step.preview;

  const printPng = () => {
        const node = document.getElementById("keyboardView");
        console.log(node);
        toPng(node).then(function (dataUrl) {
            const downloadLink = document.createElement("a");
            downloadLink.download = "layout.png";
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
      </div>
    </div>
  </div>;
}
