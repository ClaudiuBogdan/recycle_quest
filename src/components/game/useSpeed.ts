import { useEffect, useState } from "react";

const useSpeed = () => {
  const [speed, setSpeed] = useState(0);
  const [factor, setFactor] = useState(0.1);
  useEffect(() => {
    const newSpeed =
      typeof window !== "undefined" ? window.innerHeight * factor : 0;
    setSpeed(newSpeed);

    const timeoutId = setTimeout(
      () => setFactor((factor) => (factor += 0.01)),
      1000,
    );
    return () => clearTimeout(timeoutId);
  }, [factor]);
  return speed;
};
export default useSpeed;
