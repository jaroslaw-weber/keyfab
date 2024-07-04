import Link from "next/link";

const LayoutCard = ({ layout }) => (
  <div key={layout.id} className="card card-bordered card-compact bg-base-100 shadow-xl m-2">
    <div className="card-body">
      <h2 className="card-title">{layout.name}</h2>
      <p>Hardware: {layout.hardware}</p>
      <p>{layout.layerCount ? `Layers: ${layout.layerCount}` : 'Layers: Not specified'}</p>
      <div className="card-actions justify-end">
        <Link href={`/share/${layout.id}`} className="btn btn-link">
          View Layout
        </Link>
      </div>
    </div>
  </div>
);

export default LayoutCard;
