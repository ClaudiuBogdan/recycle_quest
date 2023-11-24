import {
  ILeaderboardService,
  IUpdateHighScoreArgs,
} from "@/interfaces/ILeaderboardService";
import { LeaderboardEntry } from "@/models/Leaderboard";
import { ILeaderboardAdapter } from "../interfaces/ILeaderboardAdapter";

class LeaderboardService implements ILeaderboardService {
  constructor(private leaderboardAdapter: ILeaderboardAdapter) {}

  async getTopScores(limit: number): Promise<LeaderboardEntry[]> {
    return await this.leaderboardAdapter.getTopScores(limit);
  }

  async getUserHighScore(userId: string): Promise<LeaderboardEntry | null> {
    return await this.leaderboardAdapter.getUserHighScore(userId);
  }

  async updateHighScore(args: IUpdateHighScoreArgs): Promise<LeaderboardEntry> {
    const userHighScoreEntry = await this.leaderboardAdapter.getUserHighScore(
      args.userId,
    );
    if (userHighScoreEntry && userHighScoreEntry.highScore > args.score) {
      return userHighScoreEntry;
    }

    const data = {
      userId: args.userId,
      nickname: args.nickname,
      gameId: args.gameId,
      highScore: args.score,
      lastUpdated: new Date().toISOString(),
    };
    return this.leaderboardAdapter.updateHighScore(data);
  }

  async getRankByUserId(userId: string): Promise<number> {
    return this.leaderboardAdapter.getRankByUserId(userId);
  }
}

export default LeaderboardService;
