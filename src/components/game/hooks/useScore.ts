import { useCallback, useState } from "react";
import { GameEvent } from "@/models/Game";
import { GameState, calculateScore } from "@/services/ScoreService";

export function useScore() {
  const [scoreState, setScoreState] = useState<GameState>({
    score: 0,
    multiplier: 1,
  });

  const updateScore = useCallback((event: GameEvent) => {
    setScoreState((state) => calculateScore(event, state));
  }, []);

  return { ...scoreState, updateScore };
}
