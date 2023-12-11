import { useCallback, useEffect, useRef, useState } from "react";
import { TrashItemData } from "@/models/TrashItem";
import { getInitialItems, nextItemBuilder } from "./utils/items";
import { ITrashItemUI } from "../types";

const startingPosition = -0.25; // In percentage with respect to the conveyor belt height

export function useItems(trashItems: TrashItemData[], initialItemsCount = 3) {
  const lastIdRef = useRef(0);
  const [items, setItems] = useState<ITrashItemUI[]>([]);
  const getNextItemRef = useRef(nextItemBuilder(trashItems));

  useEffect(() => {
    const initialItems = getInitialItems(
      trashItems,
      startingPosition,
      initialItemsCount,
    );
    lastIdRef.current = initialItems[initialItems.length - 1]?.id ?? 0;
    setItems(initialItems);
  }, [trashItems, initialItemsCount]);

  const removeItem = useCallback(
    (itemId: number) => {
      const newItem: ITrashItemUI = {
        id: lastIdRef.current + 1,
        positionProgress: startingPosition, // No access to last item without introducing items as dependencies, so will be updated later.
        ...getNextItemRef.current(),
      };
      lastIdRef.current++;

      setItems((items) => {
        const removedItem = items.find((item) => item.id === itemId);
        if (!removedItem) {
          return items;
        }

        const newItems = items.filter(
          (item) => item.id !== itemId && item.id !== newItem.id,
        );

        const lastItemPosition =
          newItems[newItems.length - 1]?.positionProgress ??
          newItem.positionProgress;
        newItem.positionProgress = Math.min(
          lastItemPosition + startingPosition,
          newItem.positionProgress,
        );

        newItems.push(newItem);
        return newItems;
      });
    },
    [trashItems],
  );

  const getFirstItem = useCallback((): ITrashItemUI | null => {
    const item = items[0];
    if (!item || item.positionProgress < startingPosition / 2) {
      return null;
    }
    return item;
  }, [items]);

  const verifyBinSelection = useCallback(
    (item: ITrashItemUI, binType: string): ITrashItemUI | null => {
      if (!item || item.type !== binType) {
        return null;
      }
      return item;
    },
    [],
  );

  return {
    items,
    removeItem,
    getFirstItem,
    verifyBinSelection,
  };
}
