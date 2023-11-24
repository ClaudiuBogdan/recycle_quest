import * as uuid from "uuid";
import { IGameService } from "@/interfaces/IGameService";
import { BinSelectionStats, GameData, GameStats } from "@/models/Game";
import { IGameAdapter } from "../interfaces/IGameAdapter";

class GameService implements IGameService {
  constructor(private gameAdapter: IGameAdapter) {}

  async createGame(gameData: Omit<GameData, "id">): Promise<GameData> {
    return this.gameAdapter.createGame({
      id: uuid.v4(),
      ...gameData,
    });
  }

  async getGameById(gameId: string): Promise<GameData | null> {
    const gameData = await this.gameAdapter.getGameById(gameId);
    if (!gameData) {
      return null;
    }
    gameData.stats = this.getGameStats(gameData);
    return gameData;
  }

  private getGameStats(gameData: GameData): GameStats {
    // Initialize stats containers
    const correctBinSelectionStats: Record<string, BinSelectionStats> = {};
    const incorrectBinSelectionStats: Record<string, BinSelectionStats> = {};
    let binSelectionStats: Record<string, BinSelectionStats>;

    let correctQuizAnswerCount = 0;
    let incorrectQuizAnswerCount = 0;

    // Process each event
    gameData.events.forEach((event) => {
      switch (event.type) {
        case "itemSelected":
          binSelectionStats = event.isCorrect
            ? correctBinSelectionStats
            : incorrectBinSelectionStats;
          if (!binSelectionStats[event.binId]) {
            binSelectionStats[event.binId] = {
              binId: event.binId,
              count: 0,
              type: "bin_selection",
            };
          }
          binSelectionStats[event.binId].count++;
          break;
        case "quizItem":
          if (event.isCorrect) {
            correctQuizAnswerCount++;
          } else {
            incorrectQuizAnswerCount++;
          }
          break;
        // Other event types can be processed here if needed
      }
    });

    // Compile the statistics into an array
    const stats: GameStats = {
      correct: Object.values(correctBinSelectionStats),
      incorrect: Object.values(incorrectBinSelectionStats),
    };
    if (correctQuizAnswerCount > 0) {
      stats.correct.push({
        count: correctQuizAnswerCount,
        type: "quiz_answer",
      });
    }
    if (incorrectQuizAnswerCount > 0) {
      stats.incorrect.push({
        count: incorrectQuizAnswerCount,
        type: "quiz_answer",
      });
    }

    return stats;
  }
}

export default GameService;
