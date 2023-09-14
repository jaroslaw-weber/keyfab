import { useAtom } from "jotai";
import { EditMode, editModeAtom } from "../state";

export function SelectMode() {
  const [editMode, setEditMode] = useAtom(editModeAtom);

  const radio = (
    <div className="w-full">
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text">Input Mode</span>
          <input
            type="radio"
            name="radio-10"
            value={EditMode.input.toString()}
            className="radio checked:bg-red-500"
            checked={editMode === "input"}
            onClick={(e) => setEditMode(EditMode.input)}
          />
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text">Select Mode</span>
          <input
            type="radio"
            name="radio-10"
            value={EditMode.select.toString()}
            checked={editMode === "select"}
            className="radio checked:bg-blue-500"
            onClick={(e) => setEditMode(EditMode.select)}
          />
        </label>
      </div>
    </div>
  );
  const card = (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title justify-center">Edit Mode</h2>
        <div className="card-actions justify-center">{radio}</div>
      </div>
    </div>
  );
  return card;
}
