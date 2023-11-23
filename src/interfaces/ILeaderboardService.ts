import { LeaderboardEntry } from "@/models/Leaderboard";

export interface ILeaderboardService {
  getTopScores(limit: number): Promise<LeaderboardEntry[]>;
  getUserHighScore(userId: string): Promise<LeaderboardEntry | null>;
  updateHighScore(entry: LeaderboardEntry): Promise<LeaderboardEntry>;
  getRankByUserId(userId: string): Promise<number>;
}
