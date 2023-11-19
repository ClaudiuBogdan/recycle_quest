import { useCallback, useRef } from "react";
import TrashItem from "./TrashItem";
import usePosition from "./usePosition";

type ConveyorBeltProps = {
  speed: number; // pixels per second
};

const ConveyorBelt: React.FC<ConveyorBeltProps> = ({ speed }) => {
  const containerRef = useRef(null);
  const position = usePosition(containerRef);

  const handleItemOverflow = useCallback((id: number) => {
    console.log("Handled overflow: ", id);
  }, []);

  const item = {
    id: 1,
    initialPosition: 500,
  };

  return (
    <div ref={containerRef} className="w-20 h-full bg-gray-600">
      <TrashItem
        item={item}
        speed={speed}
        containerPosition={position}
        onOverflow={handleItemOverflow}
      />
    </div>
  );
};

export default ConveyorBelt;
