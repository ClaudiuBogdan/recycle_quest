import { GameData } from "@/models/Game";

export interface IGameService {
  createGame(gameData: Omit<GameData, "id">): Promise<GameData>;
  getGameById(gameId: string): Promise<GameData | null>;
}
