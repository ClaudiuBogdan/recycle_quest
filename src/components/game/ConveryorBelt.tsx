import TrashItem from "./TrashItem";
import { ITrashItem, Size } from "./types";

type ConveyorBeltProps = {
  items: ITrashItem[];
  size: Size;
  speed: number;
  onOverflow: (itemId: number) => void;
};

const ConveyorBelt: React.FC<ConveyorBeltProps> = ({
  items,
  speed,
  size,
  onOverflow,
}) => {
  return (
    <div
      className="bg-gray-600"
      style={{ width: `${size.width}px`, height: `${size.height}px` }}
    >
      {items.map((item) => (
        <TrashItem
          key={item.id}
          item={item}
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
