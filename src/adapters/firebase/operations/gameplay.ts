import { Gameplay } from "@/dsl/gameplay/types";
import { database } from "../init";

const gameplayRef = "gameplay";

export const insertGameplay = async (gameplayData: Gameplay) => {
  const { id } = gameplayData;

  await database.ref(`${gameplayRef}/${id}`).set(gameplayData);

  return gameplayData;
};
