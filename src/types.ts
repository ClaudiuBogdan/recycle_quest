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

// Important! Also update the enum when changing the type, as is used in the api validation
export type TTrashItemType =
  | "green"
  | "yellow"
  | "blue"
  | "brown"
  | "black"
  | "none";

export enum TTrashItemTypeEnum {
  green = "green",
  yellow = "yellow",
  blue = "blue",
  brown = "brown",
  black = "black",
  none = "none",
}

export type LeaderboardEntry = {
  id: string;
  username: string;
  highscore: number;
};
