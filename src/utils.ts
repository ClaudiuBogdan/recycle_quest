import { ITrashItem, ITrashItemBase, TTrashItemType } from "./types";

export function getRandomItem<T>(arr: T[]): T {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

export function generateItem(
  baseItems: ITrashItemBase[],
  duration: number,
): ITrashItem {
  const item = getRandomItem(baseItems);
  return {
    ...item,
    id: Math.random().toString(),
    animationDuration: duration,
    position: 0,
    selectedBin: null,
  };
}

export function calculateSpawnRate(duration: number, spread: number) {
  return duration * spread;
}

export function assignBinToItem(
  item: ITrashItem,
  bin: TTrashItemType,
): boolean {
  item.selectedBin = bin;

  return item.type === bin;
}
