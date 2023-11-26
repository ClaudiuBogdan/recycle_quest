import { RecycleBinType } from "@/models/Bin";

export interface GameData {
  id: string; // Unique identifier for the game session
  userId: string; // Reference to User
  startedAt: string; // Start time of the game
  endedAt: string; // End time of the game
  events: Array<GameEvent>; // Array of game events
  stats?: GameStats;
  score: number; // Total score of the game
}

// Define a type for different game events
export type GameEvent =
  | ItemSelectedEvent
  | ItemMissedEvent
  | QuizItemEvent
  | ScoreMultiplierEvent;

// Define each event type
export interface ItemSelectedEvent {
  type: "itemSelected";
  itemId: string; // ID of the item selected
  binId: RecycleBinType; // ID of the bin selected
  isCorrect: boolean; // Whether the selection was correct
  timestamp: Date;
}

export interface ItemMissedEvent {
  type: "itemMissed"; // Event for missed items
  itemId: string; // ID of the missed item
  timestamp: Date;
}

export interface QuizItemEvent {
  type: "quizItem";
  questionId: string; // ID of the quiz question
  answerId: string; // ID of the answer
  isCorrect: boolean; // Whether the answer was correct
  timestamp: Date;
}

export interface ScoreMultiplierEvent {
  type: "scoreMultiplier"; // Type of multiplier event
  active: boolean;
  multiplier: number; // Multiplier value
  timestamp: Date;
}

export interface GameStats {
  correct: Array<StatsItem>;
  incorrect: Array<StatsItem>;
}

export type StatsItem = BinSelectionStats | QuizAnswerStats;

export interface BinSelectionStats {
  binId: RecycleBinType;
  count: number;
  type: "bin_selection";
}

export interface QuizAnswerStats {
  count: number;
  type: "quiz_answer";
}
