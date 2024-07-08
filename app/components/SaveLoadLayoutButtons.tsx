import { useAtom } from "jotai";
import {
  currentLayoutIdAtom,
  currentLayoutNameAtom,
  currentKeyboardLayoutAtom,
  keyboardTypeAtom,
  layersAtom,
  loadingAtom,
} from "../state";
import { db } from "../db";
import { getUserId, keyboardLayoutCollection } from "../db/utils";

export default function SaveLoadLayoutButtons() {
  const [loading, setLoading] = useAtom(loadingAtom);
  const [currentLayout, setCurrentLayout] = useAtom(currentKeyboardLayoutAtom);

  async function saveLayout() {
    setLoading(true);
    try {
      const p = currentLayout;
      p.created_by = getUserId();
      const id = p.id;
      if (id) {
        await keyboardLayoutCollection.update(id, { ...p });
      } else {
        const item = await keyboardLayoutCollection.create({ ...p });
        setCurrentLayout({ ...item });
      }
    } catch (e) {
      window.alert(e);
    }
    setLoading(false);
  }
  const isMyLayout = currentLayout.created_by == getUserId();
  const canSave = isMyLayout || !currentLayout.id;

  return (
    <div className="w-full">
      <div className="px-8 text-xs text-gray-400">
      {currentLayout.id && <p>id: {currentLayout.id}</p>}
      {currentLayout.id && <p>created by: {currentLayout.id}</p>}
       
      </div>
      <div id="save" className="flex gap-8 w-full px-8 pb-8 items-center">
        <label className="form-control">
          <div className="label">
            <span className="label-text">name:</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered"
            value={currentLayout.name}
            onChange={(e) => {
              const newName = e.target.value;
              currentLayout.name = newName;
              setCurrentLayout({ ...currentLayout });
            }}
          />
        </label>
        <label className="form-control">
          <div className="label">
            <span className="label-text">hardware:</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered"
            value={currentLayout.hardware}
            onChange={(e) => {
              currentLayout.hardware = e.target.value;
              setCurrentLayout({ ...currentLayout });
            }}
          />
        </label>{" "}
        <label className="form-control">
          <div className="label">
            <span className="label-text">description:</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered"
            value={currentLayout.description}
            onChange={(e) => {
              currentLayout.description = e.target.value;
              setCurrentLayout({ ...currentLayout });
            }}
          />
        </label>
        {canSave && (
          <button
            className="btn btn-primary mt-auto"
            onClick={() => saveLayout()}
          >
            {loading ? "Wait..." :  "Save"}
          </button>
        )}
        {currentLayout.id && (
          <button
            className="btn btn-neutral mt-auto"
            onClick={() => {
              setCurrentLayout({ ...currentLayout, id: undefined });
            }}
          >
            Create New Layout
          </button>
        )}
      </div>
    </div>
  );
}
