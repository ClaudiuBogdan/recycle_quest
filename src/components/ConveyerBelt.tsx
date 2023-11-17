import { ITrashItem } from "@/types";
import TrashItem from "./TrashItem";

export interface IConveyerBelt {
  items: ITrashItem[];
  animationDuration: number;
}

export default function ConveyerBelt(props: IConveyerBelt) {
  const { items, animationDuration } = props;

  return (
    <div
      className="conveyor-belt w-1/3"
      style={{ animationDuration: `${animationDuration}s` }}
    >
      {items
        .filter((item) => !item.selectedBin)
        .map((item) => (
          <TrashItem
            {...item}
            animationDuration={animationDuration}
            key={item.id}
          />
        ))}
    </div>
  );
}
