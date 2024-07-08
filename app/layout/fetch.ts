import { useEffect } from "react";
import { useAtom } from "jotai";
import { db } from "@/app/db";
import { layoutListAtom, loadingLayoutsAtom } from "../state";

export function useFetchLayouts(isPersonal = true) {
  const [layouts, setLayouts] = useAtom(layoutListAtom);
  const [isLoading, setLoading] = useAtom(loadingLayoutsAtom);

  useEffect(() => {
    setLoading(true);
    async function fetchLayouts() {
      const filter = isPersonal
        ? db?.filter("created_by={:id}", { id: db.authStore.model?.id })
        : undefined;
      const params = filter ? { filter } : {};
      try {
        const result = await db
          .collection("keyboard_layout")
          .getList(0, 0, params);
        setLayouts(result.items);
      } catch (error) {
        console.error("Failed to fetch layouts:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchLayouts();
  }, [isPersonal, setLayouts, setLoading]);

  return { layouts, isLoading };
}
