import { useAtom } from "jotai";
import { cssAtom } from "../state";

export function EditStylePanel() {
  const [css, setCss] = useAtom(cssAtom);

  const editLayerCssPanel = (
    <div className="h-full p-8 flex flex-col bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Edit Style</h2>
      <p className="text-gray-600 mb-4">Customize the CSS:</p>
      <textarea
        className="border rounded-lg p-2 text-sm bg-white resize-none focus:ring focus:ring-blue-200 flex-grow"
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
