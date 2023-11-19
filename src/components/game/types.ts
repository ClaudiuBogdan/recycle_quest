export type ITrashItem = ITrashItemBase & {
  id: number;
  position: number;
};

export type ITrashItemBase = {
  image: string;
  type: string;
  label: string;
};

export type RecycleBinType = "green" | "yellow" | "blue" | "brown" | "black";
