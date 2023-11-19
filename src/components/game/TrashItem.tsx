import { useEffect, useRef, useState } from "react";
import { ITrashItem } from "./types";
import { getPosition } from "./usePosition";

interface TrashItemProps {
  // width: string;
  item: ITrashItem;
  speed: number;
  containerPosition: {
    bottom: number;
  } | null;
  onOverflow: (id: number) => void;
}

const TrashItem: React.FC<TrashItemProps> = ({
  speed,
  item,
  containerPosition,
  onOverflow,
}) => {
  const [overflowed, setOverflowed] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);
  const itemRef = useRef(item);
  const lastTime = useRef(0);

  useEffect(() => {
    if (overflowed) {
      onOverflow(itemRef.current.id);
    }
  }, [overflowed, onOverflow]);

  useEffect(() => {
    const setInitialTimestamp = (timestamp: number) => {
      if (lastTime.current === 0) {
        lastTime.current = timestamp;
      }
    };
    const frameId = requestAnimationFrame(setInitialTimestamp);
    return () => cancelAnimationFrame(frameId);
  }, []);

  useEffect(() => {
    let animationId: number;
    const item = itemRef.current;
    const animate = (timestamp: number) => {
      if (!divRef.current) {
        return;
      }
      const currentTime = timestamp;
      const deltaTime = (currentTime - lastTime.current) / 1000;
      const minMilSecPerFrame = 0.000016;
      if (deltaTime < minMilSecPerFrame) {
        return;
      }
      lastTime.current = currentTime;
      const currentY =
        parseFloat(
          divRef.current.style.transform
            .replace("translateY(", "")
            .replace("px)", ""),
        ) || item.initialPosition;
      const newY = currentY + speed * deltaTime;
      divRef.current.style.transform = `translateY(${newY}px)`;
      divRef.current.style.visibility = "visible";

      // Check if the item has reached the end of the conveyor belt
      const position = getPosition(divRef.current);
      if (
        position &&
        containerPosition &&
        position.bottom > containerPosition.bottom
      ) {
        setOverflowed(true);
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [speed, containerPosition]);
  return (
    <div className="w-20 h-20 bg-white absolute top-0 invisible" ref={divRef}>
      Trash
    </div>
  );
};

export default TrashItem;
