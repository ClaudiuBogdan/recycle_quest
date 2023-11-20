import * as uuid from "uuid";
import {
  getGamePlay,
  insertGameplay,
} from "@/adapters/firebase/operations/gameplay";
import { getUserById, updateUser } from "@/adapters/firebase/operations/users";
import { trashItems } from "@/components/game/hooks/useItems";
import { GamePlayData, GameplayRequest } from "./types";
import { User } from "../users/types";

export const addUserscore = async (user: User, gameResult: GameplayRequest) => {
  const gameplayId = uuid.v4();

  const score = await calculateScore(gameResult.result);

  await updateUserhighscore(user, score);

  const gameplayData = {
    user_id: user.id,
    score: score,
    id: gameplayId,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  return await insertGameplay(gameplayData);
};

async function calculateScore(items: GamePlayData[]): Promise<number> {
  let score = 0;
  for (const item of items) {
    const itemTemplate = trashItems.find(
      (trash) => trash.image === item.asset_name,
    );
    if (!itemTemplate) {
      console.error("No item found", item);
      continue;
    }
    if (item.container === itemTemplate.type) {
      score++;
    }
  }
  return score;
}

async function updateUserhighscore(user: User, score: number) {
  if (user && Number(user.highscore) < score)
    await updateUser({ ...user, highscore: score });
}

export async function getGamePlayData(gameplayId: string) {
  const gameplay = await getGamePlay(gameplayId);
  if (!gameplay) return null;

  const user = (await getUserById(gameplay.user_id!)) as User;

  if (!user) return null;

  const data = {
    ...gameplay,
    username: user.username,
    highscore: user.highscore,
  };
  return data;
}
