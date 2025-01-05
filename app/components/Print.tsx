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

  const print = (filetype:string) => {
    const node = document.getElementById("keyboardView");
    let dataUrlPromise;
    switch (filetype) {
        case "png":
            dataUrlPromise = toPng(node!);
            break;
        case "svg":
            dataUrlPromise = toSvg(node!);
            break;
        case "jpg":
            dataUrlPromise = toJpeg(node!);
            break;
    }
    dataUrlPromise!.then(function (dataUrl) {
        const downloadLink = document.createElement("a");
        downloadLink.download = currentKeyboardLayout.name + "." + filetype;
        downloadLink.href = dataUrl;
        downloadLink.click();
        downloadLink.remove();
    })
  };

  return show && <div className="card bg-base-100 shadow-xl">
    <div className="card-body">
      <h2 className="card-title justify-center">Print</h2>
      <div></div>
      <div className="card-actions justify-center">
        <button className="btn btn-primary" onClick={() => print("png")}>PNG</button>
        <button className="btn btn-primary" onClick={() => print("svg")}>SVG</button>
        <button className="btn btn-primary" onClick={() => print("jpg")}>JPG</button>
      </div>
    </div>
  </div>;
}
