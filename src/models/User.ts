export interface UserData {
  id: string;
  nickname: string;
  token: string;
  lastPlayed: Date | null;
  highScore: number;
}
