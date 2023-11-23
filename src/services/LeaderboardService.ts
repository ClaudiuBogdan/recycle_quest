import { ILeaderboardService } from "@/interfaces/ILeaderboardService";
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

  async updateHighScore(entry: LeaderboardEntry): Promise<LeaderboardEntry> {
    return this.leaderboardAdapter.updateHighScore(entry);
  }

  getRankByUserId(userId: string): Promise<number> {
    return this.leaderboardAdapter.getRankByUserId(userId);
  }
}

export default LeaderboardService;
