import { TTrashItemType } from "@/types";

export type Asset = {
  id: string;
  name: string;
  description: string;
  container: TTrashItemType;
  points: number;
};

export type AssetCreateRequest = {
  name: string;
  description: string;
  container: TTrashItemType;
  points: number;
};
