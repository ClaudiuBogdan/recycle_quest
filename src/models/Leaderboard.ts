export interface LeaderboardEntry {
  userId: string; // Reference to User
  gameId: string;
  nickname: string;
  highScore: number;
  lastUpdated: string;
}
