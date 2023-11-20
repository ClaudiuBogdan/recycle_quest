export type ITrashItem = ITrashItemBase & {
  id: number;
  positionProgress: number; // can have negative value, as the items are generated before entering the belt.
};

export type ITrashItemBase = {
  image: string;
  type: string;
  label: string;
};

export type RecycleBinType = "green" | "yellow" | "blue" | "brown" | "black";

export type Position = {
  height: number;
  bottom: number;
};

export type Size = {
  width: number;
  height: number;
};
