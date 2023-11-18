import { Gameplay } from "@/dsl/gameplay/types";
import { database } from "../init";

const gameplayRef = "gameplay";

export const insertGameplay = async (gameplayData: Gameplay) => {
  const { id } = gameplayData;

  await database.ref(`${gameplayRef}/${id}`).set(gameplayData);

  return gameplayData;
};

export const getGamePlay = async (
  gameplayId: string,
): Promise<Gameplay | null> => {
  let gameplay: Gameplay | null = null;
  const snapshot = await database.ref(`${gameplayRef}`).once("value");
  if (snapshot.exists()) {
    snapshot.forEach((item) => {
      const id = item.val().id;

      if (id == gameplayId) gameplay = item.val();
    });
  }
  return gameplay;
};
