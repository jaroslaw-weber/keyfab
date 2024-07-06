"use client"
import LayoutCard from "../components/LayoutCard";
import { useFetchLayouts } from "../fetch";

export default function MyLayouts() {
  const { layouts: myLayouts, isLoading } = useFetchLayouts(true); // true for personal layouts

  if (isLoading) {
    return (
      <div className="min-h-full flex items-center justify-center p-4">
        Loading layouts...
      </div>
    );
  }

  return (
    <div className="min-h-full p-4 grid grid-cWols-3">
      {myLayouts.length > 0 && (
myLayouts.map((layout) => (
  <LayoutCard key={layout.id} layout={layout} />
))
      )}
    </div>
  );
}
