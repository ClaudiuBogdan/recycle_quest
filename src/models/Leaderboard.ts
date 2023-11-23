export interface LeaderboardEntry {
  userId: string; // Reference to User
  nickname: string;
  highScore: number;
  lastUpdated: Date;
}
