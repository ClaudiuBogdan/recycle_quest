export interface GameData {
  id: string;
  userId: string; // Reference to User
  startTime: Date;
  endTime: Date;
  itemsSelected: Array<{
    itemId: string;
    binId: string;
    correct: boolean;
  }>;
  score: number;
}
