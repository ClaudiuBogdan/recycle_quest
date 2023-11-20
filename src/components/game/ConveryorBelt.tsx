import TrashItem from "./TrashItem";
import { ITrashItem } from "./types";

type ConveyorBeltProps = {
  items: ITrashItem[];
  speed: number;
  width: number;
  height: number;
  onOverflow: (itemId: number) => void;
};

const ConveyorBelt: React.FC<ConveyorBeltProps> = ({
  items,
  speed,
  width,
  height,
  onOverflow,
}) => {
  return (
    <div
      className="bg-gray-600"
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      {items.map((item) => (
        <TrashItem
          key={item.id}
          item={item}
          speed={speed}
          size={width}
          containerPosition={{
            height,
            bottom: height,
          }}
          onOverflow={onOverflow}
        />
      ))}
    </div>
  );
};

export default ConveyorBelt;
