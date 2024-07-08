"use client";
import LayoutCard from "./components/LayoutCard";
import { useFetchLayouts } from "./fetch";

export default function AllLayouts() {
  const { layouts, isLoading } = useFetchLayouts(false); // false for all layouts

  return (
    <div>
      {isLoading && (
        <div className="min-h-full flex items-center justify-center p-4">
          Loading layouts...
        </div>
      )}
      {!isLoading && (
        <div className="min-h-full p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          {layouts.length > 0 &&
            layouts.map((layout) => (
              <LayoutCard key={layout.id} layout={layout} />
            ))}
        </div>
      )}
    </div>
  );
}
