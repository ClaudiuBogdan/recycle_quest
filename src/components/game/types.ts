import { RecycleBinType } from "@/models/Game";
import { TrashItemData } from "@/models/TrashItem";

export type ITrashItemUI = TrashItemData & {
  id: number;
  positionProgress: number; // can have negative value, as the items are generated before entering the belt.
};

export type ITrashItemApi = ITrashItemUI & {
  state: "valid" | "invalid" | "missed";
  selectedBin: RecycleBinType;
};

export type Position = {
  height: number;
  bottom: number;
};

export type Size = {
  width: number;
  height: number;
};
