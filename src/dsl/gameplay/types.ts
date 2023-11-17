import { TTrashItemType } from "@/types";

export type Gameplay = {
  id: string;
  user_id: string;
  score: number;
};

export type GameplayRequest = {
  access_token: string;
  result: GamePlayData[];
};

export type GamePlayData = {
  asset_name: string;
  container: TTrashItemType;
};
