import { useAtom } from "jotai";
import { cssAtom } from "../state";

export function EditStylePanel() {
  const [css, setCss] = useAtom(cssAtom);

  const editLayerCssPanel = (
    <div className=" h-full  p-8 flex flex-col">
      <p className="flex-shrink text-2xl">edit style</p>
      <p className="flex-shrink py-2">it's plain css!</p>
      <textarea
        className={`border rounded px-2 py-1 mt-1 mb-2 flex-1`}
        onChange={(e) => {
          setCss(e.target.value);
          console.log("new css: ", css);
        }}
        value={css}
        rows={10}
      />
    </div>
  );
  return editLayerCssPanel;
}
