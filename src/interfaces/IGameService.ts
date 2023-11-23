import { GameData } from "@/models/Game";

export interface IGameService {
  createGame(gameData: GameData): Promise<GameData>;
  getGameById(gameId: string): Promise<GameData | null>;
}
