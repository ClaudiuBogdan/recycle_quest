import { useEffect, useState } from "react";

const useSpeed = () => {
  const [speed, setSpeed] = useState(0);
  const [factor, setFactor] = useState(10);

  useEffect(() => {
    const devicePixelDensity =
      typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1;
    const newSpeed = devicePixelDensity * factor;
    setSpeed(newSpeed);

    const timeoutId = setTimeout(
      () => setFactor((factor) => (factor += 1)),
      1000,
    );
    return () => clearTimeout(timeoutId);
  }, [factor]);
  return speed;
};
export default useSpeed;
