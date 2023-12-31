import { useCallback, useEffect, useRef, useState } from "react";

type UseSpeedProps = {
  paused: boolean;
  initialSpeed?: number;
  constantSpeed?: boolean;
  speedIncrement?: number;
};

const useSpeed = ({
  paused,
  initialSpeed = 0.08,
  constantSpeed = false,
  speedIncrement = 0.002,
}: UseSpeedProps) => {
  const [speed, setSpeed] = useState(initialSpeed);
  const lastSpeedRef = useRef(speed);
  lastSpeedRef.current = speed > 0 ? speed : lastSpeedRef.current; // Update last speed value when speed changes but is not paused

  useEffect(() => {
    if (paused) {
      setSpeed(0);
    } else {
      setSpeed(lastSpeedRef.current);
    }
  }, [paused]);

  useEffect(() => {
    if (!constantSpeed && !paused) {
      const timeoutId = setInterval(
        () => setSpeed((speed) => speed + speedIncrement),
        1000,
      );
      return () => clearTimeout(timeoutId);
    }
  }, [speedIncrement, constantSpeed, paused]);

  const resetSpeed = useCallback(() => setSpeed(initialSpeed), [initialSpeed]);
  const decreaseSpeed = useCallback(
    () => setSpeed((speed) => Math.max(speed - initialSpeed / 3, initialSpeed)),
    [initialSpeed],
  );

  return { speed, resetSpeed, decreaseSpeed };
};
export default useSpeed;
