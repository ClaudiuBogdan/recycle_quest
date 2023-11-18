export interface ITrashItem extends ITrashItemBase {
  id: string;
  position: number;
  animationDuration: number;
  selectedBin: TTrashItemType | null;
}

export interface ITrashItemBase {
  image: string;
  type: TTrashItemType;
  label: string;
}
export type TTrashItemType =
  | "green"
  | "yellow"
  | "blue"
  | "brown"
  | "black"
  | "none";
