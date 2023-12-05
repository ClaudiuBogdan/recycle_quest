import { useEffect, useRef, useState } from "react";
import TrashItemImage from "./TrashItemImage";
import { ITrashItemUI, Size } from "./types";

type TrashItemProps = Size & {
  item: ITrashItemUI;
  speed: number;
  containerPosition: {
    height: number;
    bottom: number;
  };
  hideLabel?: boolean;
  onOverflow: (item: ITrashItemUI) => void;
};

const TrashItem: React.FC<TrashItemProps> = ({
  speed,
  item,
  width,
  height,
  hideLabel,
  containerPosition,
  onOverflow,
}) => {
  const [overflowed, setOverflowed] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);
  const itemRef = useRef(item);
  const lastTime = useRef(0);

  useEffect(() => {
    if (overflowed) {
      onOverflow(itemRef.current);
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
      const currentTime = timestamp;
      const deltaTime = (currentTime - lastTime.current) / 1000;
      const minMilSecPerFrame = 0.000016;
      if (deltaTime < minMilSecPerFrame) {
        animationId = requestAnimationFrame(animate);
        return;
      }
      lastTime.current = currentTime;

      const currentProgress = item.positionProgress;
      const newProgress = currentProgress + speed * deltaTime;
      const newPosition = newProgress * containerPosition.height;
      item.positionProgress = newProgress;

      // Update UI position
      if (divRef.current) {
        divRef.current.style.transform = `translateY(${newPosition}px)`;
        divRef.current.style.visibility = "visible";
      }

      // Check if the item has reached the end of the conveyor belt
      if (newPosition + height > containerPosition.bottom) {
        setOverflowed(true);
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [speed, height, containerPosition]);
  return (
    <div
      className="absolute top-0 invisible text-center"
      ref={divRef}
      style={{
        width: `${width}px`,
        height: `${height}px`,
      }}
    >
      <TrashItemImage
        imageId={item.imageId}
        label={item.label}
        width={width}
        height={height}
      />
      {!hideLabel && (
        <span className="text-white relative" style={{ top: "-1rem" }}>
          {item.label}
        </span>
      )}
    </div>
  );
};

export default TrashItem;
