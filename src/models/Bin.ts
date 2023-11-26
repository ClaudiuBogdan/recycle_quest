export type BinData = {
  type: RecycleBinType;
  label: string;
};

export type RecycleBinType =
  | "green"
  | "yellow"
  | "blue"
  | "brown"
  | "black"
  | "none";
