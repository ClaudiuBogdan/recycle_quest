import admin from "firebase-admin";
import { GameData } from "@/models/Game";
import { firebaseDb } from "./firebaseInit";
import { IGameAdapter } from "../../interfaces/IGameAdapter";

class FirebaseGameAdapter implements IGameAdapter {
  private db: admin.database.Database;
  private gamesRef: admin.database.Reference;

  constructor() {
    this.db = firebaseDb;
    this.gamesRef = this.db.ref("games");
  }

  async createGame(gameData: GameData): Promise<GameData> {
    const newGameRef = this.gamesRef.child(gameData.id);
    await newGameRef.set({
      ...gameData,
      startTime: gameData.startedAt.toISOString(),
      endTime: gameData.endedAt.toISOString(),
    });
    return gameData;
  }

  async getGameById(gameId: string): Promise<GameData | null> {
    const gameRef = this.gamesRef.child(gameId);
    const gameSnap = await gameRef.once("value");
    if (gameSnap.exists()) {
      const data = gameSnap.val();
      return {
        ...(data as GameData),
        startedAt: new Date(data.startTime),
        endedAt: new Date(data.endTime),
      };
    } else {
      return null;
    }
  }
}

export default FirebaseGameAdapter;
