import { useCallback, useEffect, useRef, useState } from "react";
import { TrashItemData } from "@/models/TrashItem";
import { ITrashItemUI } from "../types";

const startingPosition = -0.3; // In percentage with respect to the conveyor belt height

export function useItems(trashItems: TrashItemData[]) {
  const lastIdRef = useRef(0);
  const [items, setItems] = useState<ITrashItemUI[]>([]);

  useEffect(() => {
    const initialItems = getInitialItems(trashItems, startingPosition, 3);
    lastIdRef.current = initialItems[initialItems.length - 1]?.id ?? 0;
    setItems(initialItems);
  }, []);

  const removeItem = useCallback((itemId: number) => {
    const newItem: ITrashItemUI = {
      id: lastIdRef.current + 1,
      positionProgress: startingPosition, // No access to last item without introducing items as dependencies, so will be updated later.
      ...getRandomItem(trashItems),
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
  }, []);

  const getFirstItem = useCallback((): ITrashItemUI | null => {
    return items[0];
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

export function getInitialItems(
  trashItems: TrashItemData[],
  initialPosition: number,
  count = 3,
): ITrashItemUI[] {
  const items: ITrashItemUI[] = [];
  for (let i = 0; i < count; i++) {
    const baseItem = getRandomItem(trashItems);
    const item: ITrashItemUI = {
      id: i + 1,
      positionProgress: initialPosition * i,
      ...baseItem,
    };
    items.push(item);
  }
  return items;
}

export function getRandomItem<T>(arr: T[]): T {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}
