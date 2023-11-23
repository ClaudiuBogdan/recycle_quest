import { GameData } from "@/models/Game";

export interface IGameAdapter {
  createGame(gameData: GameData): Promise<GameData>;
  getGameById(gameId: string): Promise<GameData | null>;
}
