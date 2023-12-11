import { TrashItemData } from "@/models/TrashItem";
import shuffleArray from "@/utils/shuffle";
import { ITrashItemUI } from "../../types";

export function getInitialItems(
  trashItems: TrashItemData[],
  initialPosition: number,
  count: number,
): ITrashItemUI[] {
  const randomItems = shuffleArray(trashItems);
  const items: ITrashItemUI[] = [];

  for (let i = 0; i < count; i++) {
    const baseItem = randomItems[i % trashItems.length];
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

export function nextItemBuilder<T>(arr: T[]): () => T {
  let items = shuffleArray(arr);
  let idx = 0;

  return () => {
    if (idx === items.length) {
      items = shuffleArray(arr);
      idx = 0;
    }
    const item = items[idx];
    idx++;
    return item;
  };
}
