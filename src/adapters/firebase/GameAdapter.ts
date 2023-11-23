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
    const newGameRef = this.gamesRef.push();
    await newGameRef.set({
      ...gameData,
      startTime: gameData.startTime.toISOString(),
      endTime: gameData.endTime.toISOString(),
    });
    return { ...gameData, id: newGameRef.key! };
  }

  async getGameById(gameId: string): Promise<GameData | null> {
    const gameRef = this.gamesRef.child(gameId);
    const gameSnap = await gameRef.once("value");
    if (gameSnap.exists()) {
      const data = gameSnap.val();
      return {
        ...(data as GameData),
        startTime: new Date(data.startTime),
        endTime: new Date(data.endTime),
      };
    } else {
      return null;
    }
  }
}

export default FirebaseGameAdapter;
