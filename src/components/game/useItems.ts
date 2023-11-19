import { useCallback, useEffect, useRef, useState } from "react";
import { ITrashItem, ITrashItemBase } from "./types";

const startingPosition = -300;

export function useItems() {
  const lastIdRef = useRef(0);
  const [items, setItems] = useState<ITrashItem[]>([]);

  useEffect(() => {
    const initialItems = getInitialItems(startingPosition, 3);
    lastIdRef.current = initialItems[initialItems.length - 1]?.id ?? 0;
    setItems(initialItems);
  }, []);

  const removeItem = useCallback((itemId: number) => {
    setItems((items) => {
      const newItem = {
        id: lastIdRef.current + 1,
        initialPosition: startingPosition,
        ...getRandomItem(trashItems),
      };
      lastIdRef.current++;
      const newItems = items.filter((item) => item.id !== itemId);
      newItems.push(newItem);
      return newItems;
    });
  }, []);

  return { items, removeItem };
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
      initialPosition: initialPosition * i,
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
