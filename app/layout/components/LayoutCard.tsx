import { KeyboardLayoutSchema } from "@/app/db/schema/KeyboardLayoutSchema";
import Link from "next/link";

function LayoutCard({ layout }: { layout: KeyboardLayoutSchema }) {
  return (
    <div
      key={layout.id}
      className="card card-bordered card-compact bg-base-100 shadow-xl m-2"
    >
      <div className="card-body">
      <p className="text-sm text-gray-300">{layout.id}</p>
        <h2 className="card-title text-lg font-bold">{layout.name}</h2>
        <div className="mt-2">
          <h3 className="text-md font-semibold">Hardware</h3>
          <p>{layout.hardware}</p>
        </div>
        <div className="mt-2">
          <h3 className="text-md font-semibold">Description</h3>
          <p>{layout.description}</p>
        </div>
        <div className="mt-2">
          <h3 className="text-md font-semibold">Layers</h3>
          <p>{layout.layer_count}</p>
        </div>
        <div className="card-actions justify-end">
          <Link href={`/share/${layout.id}`} className="btn btn-link">
            View Layout
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LayoutCard;
