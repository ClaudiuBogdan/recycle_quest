import { useEffect, useState } from "react";

const useSpeed = (gameEnded: boolean) => {
  const [speed, setSpeed] = useState(0);
  const [factor, setFactor] = useState(20);

  useEffect(() => {
    if (gameEnded) {
      setSpeed(0);
      return;
    }
    const devicePixelDensity =
      typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1;
    const newSpeed = factor / devicePixelDensity;
    setSpeed(newSpeed);
    console.log(devicePixelDensity);
    const timeoutId = setTimeout(
      () => setFactor((factor) => (factor += 1)),
      1000,
    );
    return () => clearTimeout(timeoutId);
  }, [factor, gameEnded]);
  return speed;
};
export default useSpeed;
