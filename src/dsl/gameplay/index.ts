import * as uuid from "uuid";
import { filterAssets } from "@/adapters/firebase";
import { insertGameplay } from "@/adapters/firebase/operations/gameplay";
import { updateUser } from "@/adapters/firebase/operations/users";
import { GamePlayData, GameplayRequest } from "./types";
import { User } from "../users/types";

export const addUserscore = async (user: User, gameResult: GameplayRequest) => {
  const gameplayId = uuid.v4();

  const score = await calculateScore(gameResult.result);

  await updateUserhighscore(user, score);

  const gameplayData = {
    user_id: "",
    score: score,
    id: gameplayId,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  await insertGameplay(gameplayData);

  return gameplayData;
};

async function calculateScore(result: GamePlayData[]): Promise<number> {
  const assets = await filterAssets(result.map((x) => x.asset_name));

  const maximumScore = assets.reduce((sum, current) => sum + current.points, 0);

  //   const correctAnswers = assets
  //     .map((asset) => {
  //       return result.find(
  //         (el) => el.asset_name == asset.name && el.container == asset.container,
  //       )
  //         ? 0
  //         : asset.points;
  //     })
  //     .reduce((sum, current) => sum + current, 0);

  const wrongAnsewers = assets
    .map((asset) => {
      return result.find(
        (el) => el.asset_name == asset.name && el.container != asset.container,
      )
        ? 0
        : asset.points;
    })
    .reduce((sum, current) => sum + current, 0);

  return maximumScore - wrongAnsewers;
}

async function updateUserhighscore(user: User, score: number) {
  if (user && Number(user.highscore) < score)
    await updateUser({ ...user, highscore: score });
}