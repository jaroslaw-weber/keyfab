import { useAtom } from "jotai";
import {
  currentLayoutIdAtom,
  currentLayoutNameAtom,
  currentKeyboardLayoutAtom,
  keyboardTypeAtom,
  layersAtom,
} from "../state";
import { db } from "../db";
import { getUserId, keyboardLayoutCollection } from "../db/utils";

export default function SaveLoadLayoutButtons() {
  const [currentLayout, setCurrentLayout] = useAtom(currentKeyboardLayoutAtom);

  async function saveLayout() {
    try {
      const p = currentLayout;
      const id = p.id;
      if (id) {
        await keyboardLayoutCollection.update(id, { ...p });
      } else {
        const item = await keyboardLayoutCollection.create({ ...p });
        setCurrentLayout({ ...p, id: item.id });
      }
    } catch (e) {
      window.alert(e);
    }
  }
  const isMyLayout = currentLayout.created_by == getUserId();

  return (
    <div id="save" className="flex gap-8 w-full px-8 pb-8 items-center">
      {currentLayout.id && (
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">id:</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered"
            value={currentLayout.id}
          />
        </label>
      )}
      <label className="form-control w-full max-w-xs">
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
      <label className="form-control w-full max-w-xs">
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
      <label className="form-control w-full max-w-xs">
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
      {isMyLayout && (
        <button
          className="btn btn-primary mt-auto"
          onClick={() => saveLayout()}
        >
          Save layout
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
  );
}
