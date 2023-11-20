import { useEffect, useState } from "react";

export default function useSize() {
  const [conveyorBeltWidth, setConveyorBeltWidth] = useState(0);
  const [conveyorBeltHeight, setConveyorBeltHeight] = useState(0);

  useEffect(() => {
    const resize = () => {
      const conveyorBeltHeight = Math.floor(window.innerHeight * 0.6);

      const conveyorBeltWidth = Math.floor(conveyorBeltHeight * 0.2);
      setConveyorBeltWidth(conveyorBeltWidth);
      setConveyorBeltHeight(conveyorBeltHeight);
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);
  return { conveyorBeltWidth, conveyorBeltHeight };
}
