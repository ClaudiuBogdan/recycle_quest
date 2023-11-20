import { useCallback, useEffect, useRef, useState } from "react";
import { ITrashItem, ITrashItemBase } from "../types";

const startingPosition = -0.3; // In percentage with respect to the conveyor belt height

export function useItems() {
  const lastIdRef = useRef(0);
  const [items, setItems] = useState<ITrashItem[]>([]);

  useEffect(() => {
    const initialItems = getInitialItems(startingPosition, 3);
    lastIdRef.current = initialItems[initialItems.length - 1]?.id ?? 0;
    setItems(initialItems);
  }, []);

  const removeItem = useCallback((itemId: number) => {
    const newItem: ITrashItem = {
      id: lastIdRef.current + 1,
      positionProgress: startingPosition, // No access to last item without introducing items as dependencies, so will be updated later.
      ...getRandomItem(trashItems),
    };
    lastIdRef.current++;

    setItems((items) => {
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

  const verifyBinSelection = useCallback(
    (binType: string): ITrashItem | null => {
      const firstItem = items[0];
      if (!firstItem || firstItem.type !== binType) {
        return null;
      }
      return firstItem;
    },
    [items],
  );

  return { items, removeItem, verifyBinSelection };
}

export function getInitialItems(
  initialPosition: number,
  count = 3,
): ITrashItem[] {
  const items: ITrashItem[] = [];
  for (let i = 0; i < count; i++) {
    const baseItem = getRandomItem(trashItems);
    const item: ITrashItem = {
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

export const trashItems: ITrashItemBase[] = [
  {
    image: "black1",
    type: "black",
    label: "rezidual",
  },
  {
    image: "black2",
    type: "black",
    label: "rezidual",
  },
  {
    image: "black3",
    type: "black",
    label: "rezidual",
  },
  {
    image: "blue1",
    type: "blue",
    label: "hartie",
  },
  {
    image: "blue2",
    type: "blue",
    label: "hartie",
  },
  {
    image: "blue3",
    type: "blue",
    label: "hartie",
  },
  {
    image: "blue4",
    type: "blue",
    label: "hartie",
  },
  {
    image: "brown1",
    type: "brown",
    label: "organic",
  },
  {
    image: "brown2",
    type: "brown",
    label: "organic",
  },
  {
    image: "green1",
    type: "green",
    label: "sticla",
  },
  {
    image: "green2",
    type: "green",
    label: "sticla",
  },
  {
    image: "green3",
    type: "green",
    label: "sticla",
  },
  {
    image: "yellow1",
    type: "yellow",
    label: "plastic",
  },
  {
    image: "yellow2",
    type: "yellow",
    label: "plastic",
  },
  {
    image: "yellow3",
    type: "yellow",
    label: "plastic",
  },
  {
    image: "yellow4",
    type: "yellow",
    label: "plastic",
  },
  {
    image: "yellow5",
    type: "yellow",
    label: "plastic",
  },
  {
    image: "yellow6",
    type: "yellow",
    label: "plastic",
  },
];
