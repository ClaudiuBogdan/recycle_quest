import { useRef } from "react";
import styles from "./ConveyorBelt.module.css";
import { useAnimation } from "./useAnimaton";
import { TrashItem } from "../TrashItem";
import { ITrashItemUI, Size } from "../types";

type ConveyorBeltProps = {
  items: ITrashItemUI[];
  size: Size;
  hideItemLabel?: boolean;
  speed: number;
  onOverflow: (itemId: ITrashItemUI) => void;
};

const ConveyorBelt: React.FC<ConveyorBeltProps> = ({
  items,
  speed,
  size,
  hideItemLabel = false,
  onOverflow,
}) => {
  const beltRef = useRef<HTMLDivElement>(null);
  useAnimation(beltRef, speed, size.height);

  return (
    <div
      ref={beltRef}
      className={`rounded-b-md ${styles["conveyor-belt"]}`}
      style={{
        width: `${size.width}px`,
        height: `${size.height}px`,
      }}
    >
      {items.map((item) => (
        <TrashItem
          key={item.id}
          item={item}
          hideLabel={hideItemLabel}
          speed={speed}
          width={size.width}
          height={size.width}
          containerPosition={{
            height: size.height,
            bottom: size.height,
          }}
          onOverflow={onOverflow}
        />
      ))}
    </div>
  );
};

export default ConveyorBelt;
