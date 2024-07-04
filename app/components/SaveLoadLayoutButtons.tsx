import { useAtom } from "jotai";
import { currentLayoutIdAtom, currentLayoutNameAtom } from "../state";
import { db } from "../db";

export default function SaveLoadLayoutButtons() {
  const [currentLayoutName, setCurrentLayoutName] = useAtom(
    currentLayoutNameAtom
  );
  const [currentLayoutId, setCurrentLayoutId] = useAtom(currentLayoutIdAtom);

  async function saveLayout() {
    try {
      const id = currentLayoutId;
      if (id) {
        await db.collection("keyboard_layout").update(id, {
          //todo
          name: currentLayoutName,
          hardware: "test",
          created_by: db.authStore.model?.id,
          public: true,
          positions: "{}",
          layers: "{}",
          spacing: 123,
          key_size: 123,
        });
      } else {
        const item = await db.collection("keyboard_layout").create({
          hardware: "test",
          created_by: db.authStore.model?.id,
          public: true,
          positions: "{}",
          layers: "{}",
          spacing: 123,
          key_size: 123,
        });
        setCurrentLayoutId(item.id);
      }
    } catch (e) {
      window.alert(e);
    }
  }

  return (
    <div id="save" className="flex gap-4 max-w-lg  mx-auto mb-8">
      {currentLayoutId && <p>Layout ID: {currentLayoutId}</p>}
      <input
        type="text"
        className="file-input file-input-bordered w-full px-4 "
        placeholder="Input layout name"
        value={currentLayoutName}
        onChange={(e) => {
          const newName = e.target.value;
          setCurrentLayoutName(newName);
        }}
      />
      <button className="btn btn-neutral" onClick={() => saveLayout()}>
        Save layout
      </button>
      <button
        className="btn btn-neutral"
        onClick={() => setCurrentLayoutId("")}
      >
        Clear
      </button>
    </div>
  );
}
