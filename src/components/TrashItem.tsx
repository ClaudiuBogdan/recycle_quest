import { ITrashItem } from "@/types";
import TrashItemImage from "./TrashItemImage";

export default function TrashItem(props: ITrashItem) {
  const { image, position, animationDuration, label } = props;

  const startPosition = position * 100; // Convert to percentage
  const delay = -animationDuration * position; // Negative delay for starting position

  const positionStyle = {
    animation: `moveDown ${animationDuration}s linear ${delay}s 1 normal forwards`,
    top: `${startPosition}%`,
  };

  return (
    <div className="trash-item" style={positionStyle}>
      <TrashItemImage id={image} label={label} />
    </div>
  );
}
