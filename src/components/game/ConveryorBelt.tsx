import { useRef } from "react";
import TrashItem from "./TrashItem";
import { ITrashItem } from "./types";
import usePosition from "./usePosition";

type ConveyorBeltProps = {
  items: ITrashItem[];
  speed: number; // pixels per second
  onOverflow: (itemId: number) => void;
};

const ConveyorBelt: React.FC<ConveyorBeltProps> = ({
  items,
  speed,
  onOverflow,
}) => {
  const containerRef = useRef(null);
  const position = usePosition(containerRef);

  return (
    <div
      ref={containerRef}
      className="w-20 bg-gray-600"
      style={{ height: "70%" }}
    >
      {items.map((item) => (
        <TrashItem
          key={item.id}
          item={item}
          speed={speed}
          containerPosition={position}
          onOverflow={onOverflow}
        />
      ))}
    </div>
  );
};

export default ConveyorBelt;
