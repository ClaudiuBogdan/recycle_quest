import { GameEvent } from "@/models/Game";

const POINTS_FOR_CORRECT_SELECTION = 1;
const POINTS_FOR_MISSED_ITEM = 1;
const POINTS_FOR_QUIZ_CORRECT = 1;

export type GameState = {
  score: number;
  multiplier: number;
};

export function calculateScore(
  events: GameEvent | GameEvent[],
  currentState?: GameState,
): GameState {
  const state: GameState = currentState
    ? { ...currentState }
    : { score: 0, multiplier: 1 };

  if (!Array.isArray(events)) {
    events = [events]; // Convert single event to an array for uniform processing
  }

  events.forEach((event) => {
    switch (event.type) {
      case "itemSelected":
        // Score calculation for item selection
        if (event.isCorrect) {
          state.score += POINTS_FOR_CORRECT_SELECTION * state.multiplier;
        } else {
          state.score -= POINTS_FOR_CORRECT_SELECTION * state.multiplier;
        }
        break;
      case "itemMissed":
        // Deduct points or other logic for a missed item
        state.score -= POINTS_FOR_MISSED_ITEM;
        break;
      case "quizItem":
        // Score for quiz item
        if (event.isCorrect) {
          state.score += POINTS_FOR_QUIZ_CORRECT * state.multiplier;
        }
        break;
      case "scoreMultiplier":
        // Update multiplier
        state.multiplier = event.active ? event.multiplier : 1;
        break;
      default:
        // Handle other types or unexpected cases
        break;
    }
  });

  if (state.score < 0) {
    state.score = 0;
  }

  return state;
}
