import { LeaderboardEntry } from "@/models/Leaderboard";

export interface ILeaderboardService {
  getTopScores(limit: number): Promise<LeaderboardEntry[]>;
  getUserHighScore(userId: string): Promise<LeaderboardEntry | null>;
  updateHighScore(data: IUpdateHighScoreArgs): Promise<LeaderboardEntry>;
  getRankByUserId(userId: string): Promise<number>;
}

export interface IUpdateHighScoreArgs {
  userId: string;
  nickname: string;
  gameId: string;
  score: number;
}
