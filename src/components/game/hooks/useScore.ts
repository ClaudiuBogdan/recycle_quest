import { useCallback, useState } from "react";

export function useScore() {
  const [score, setScore] = useState(0);

  const incrementScore = useCallback(() => {
    setScore((score) => score + 1);
  }, []);

  return { score, incrementScore };
}
