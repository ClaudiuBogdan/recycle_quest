import { useCallback, useState } from "react";

export function useLives() {
  const totalLives = 3;
  const [lives, setLives] = useState(totalLives);

  const removeLife = useCallback(() => setLives((lives) => lives - 1), []);
  const addLife = useCallback(() => setLives((lives) => lives + 1), []);

  return { lives, totalLives, removeLife, addLife };
}
