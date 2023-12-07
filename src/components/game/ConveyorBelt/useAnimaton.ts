import { RefObject, useEffect, useRef } from "react";

export function useAnimation(
  beltRef: RefObject<HTMLDivElement>,
  speed: number,
  conveyorHight: number,
) {
  const posRef = useRef(0);
  useEffect(() => {
    const belt = beltRef.current;

    let frameId: number;

    const step = (timestamp: number) => {
      if (!belt) {
        frameId = requestAnimationFrame(step);
        return;
      }
      posRef.current = (speed * timestamp * conveyorHight) / 1000; // this could overflow and stop the band. A modulo could be used
      belt.style.backgroundPositionY = `${posRef.current}px`;
      frameId = requestAnimationFrame(step);
    };

    frameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(frameId);
  }, [beltRef, speed, conveyorHight]);
}
