import { useCallback, useState } from "react";

export function useLives() {
  const [lives, setLives] = useState(3);

  const removeLife = useCallback(() => setLives((lives) => lives - 1), []);

  return { lives, removeLife };
}
