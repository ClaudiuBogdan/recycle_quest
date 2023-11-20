import { useEffect, useState } from "react";
import { Size } from "../types";

export default function useSize() {
  const [conveyorBeltSize, setConveyorBeltSize] = useState<Size>({
    width: 0,
    height: 0,
  });

  // Bins container size
  const [binsSize, setBinsSize] = useState<Size>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const resize = () => {
      const conveyorBeltHeight = window.innerHeight * 0.8;
      const binsContainerWidth = Math.min(
        conveyorBeltHeight * 0.8,
        window.innerWidth,
      );
      const binsContainerHeight = binsContainerWidth * 0.16;
      setConveyorBeltSize({
        width: Math.floor(conveyorBeltHeight * 0.2),
        height: Math.floor(conveyorBeltHeight),
      });
      setBinsSize({
        width: Math.floor(binsContainerWidth),
        height: Math.floor(binsContainerHeight),
      });
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);
  return { conveyorBeltSize, binsSize };
}
