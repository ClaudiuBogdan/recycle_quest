import TrashItem from "./TrashItem";
import { ITrashItemUI, Size } from "./types";

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
  return (
    <div
      className="bg-gray-600 conveyor-belt"
      style={{
        width: `${size.width}px`,
        height: `${size.height}px`,
        animationDuration: `${speed ? Math.floor(850 / speed) : 0}ms`, // lag due to speed change
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
