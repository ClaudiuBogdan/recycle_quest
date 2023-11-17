export interface ITrashItem {
  image: string;
  type: TTrashItemType;
  id: string;
  position: number;
  animationDuration: number;
}

export type TTrashItemType = "green" | "yellow" | "blue" | "brown" | "black";
