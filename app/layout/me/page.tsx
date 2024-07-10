"use client";
import LoadingSpinner from "@/app/components/LoadingSpinner";
import LayoutCard from "../components/LayoutCard";
import { useFetchLayouts } from "../fetch";

export default function MyLayouts() {
  const { layouts: myLayouts, isLoading } = useFetchLayouts(true); // true for personal layouts

  return (
    <>
      {isLoading && <LoadingSpinner />}
      {!isLoading && (
        <div className="min-h-full p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          {myLayouts.length > 0 &&
            myLayouts.map((layout) => (
              <LayoutCard key={layout.id} layout={layout} />
            ))}
        </div>
      )}
    </>
  );
}
