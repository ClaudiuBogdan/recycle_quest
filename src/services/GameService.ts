import { IGameService } from "@/interfaces/IGameService";
import { GameData } from "@/models/Game";
import { IGameAdapter } from "../interfaces/IGameAdapter";

class GameService implements IGameService {
  constructor(private gameAdapter: IGameAdapter) {}

  async createGame(gameData: GameData): Promise<GameData> {
    return this.gameAdapter.createGame(gameData);
  }

  async getGameById(gameId: string): Promise<GameData | null> {
    return this.gameAdapter.getGameById(gameId);
  }
}

export default GameService;
