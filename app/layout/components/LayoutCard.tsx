import { KeyboardLayoutSchema } from "@/app/db/schema/KeyboardLayoutSchema";
import _ from "lodash";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBoxes,
  faEye,
  faLayerGroup,
  faSquare,
  faSquareEnvelope,
} from "@fortawesome/free-solid-svg-icons";

function LayoutCard({ layout }: { layout: KeyboardLayoutSchema }) {
  const layerCountDot = (n: number) => (
    <FontAwesomeIcon className="text-primary" icon={faSquare} />
  );
  const layerCountDots = _.times(layout.layer_count, (n) =>
    layerCountDot(n + 1)
  );
  return (
    <div
      key={layout.id}
      className="card card-bordered card-compact bg-base-100 shadow-xl m-2"
    >
      <div className="card-body w-full">
        <p className="text-sm text-gray-300">{layout.id}</p>
        <div className="flex items-center  w-full">
          <h2 className="card-title text-lg font-bold">{layout.name}</h2>
          <p className="flex-grow text-right">{layout.hardware}</p>
        </div>
        <div className="mt-2">
          <p>{layout.description}</p>
        </div>
        <div className="mt-2 flex gap-3 items-center">
          <h3 className="text-md font-semibold">Layers:</h3>
          <div className="flex gap-2">{layerCountDots}</div>
        </div>
        <div className="card-actions justify-end">
          <Link href={`/share?id=${layout.id}`} className="btn btn-link">
            <FontAwesomeIcon icon={faEye} /> View
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LayoutCard;
