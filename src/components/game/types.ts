import { RecycleBinType } from "@/models/Game";

export type ITrashItem = ITrashItemBase & {
  id: number;
  positionProgress: number; // can have negative value, as the items are generated before entering the belt.
};

export type ITrashItemApi = ITrashItem & {
  state: "valid" | "invalid" | "missed";
  selectedBin: RecycleBinType;
};

export type ITrashItemBase = {
  image: string;
  type: RecycleBinType;
  label: string;
};

export type Position = {
  height: number;
  bottom: number;
};

export type Size = {
  width: number;
  height: number;
};
