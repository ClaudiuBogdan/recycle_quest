import { Gameplay } from "@/dsl/gameplay/types";
import { database } from "../init";

const gameplayRef = "gameplay";

export const insertGameplay = async (gameplayData: Gameplay) => {
  const { id } = gameplayData;
  return database.ref(`${gameplayRef}/${id}`).set(gameplayData);
};
