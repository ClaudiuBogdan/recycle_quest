import { useEffect, useState } from "react";
import ConveyerBelt from "@/components/ConveyerBelt";
import { ITrashItem } from "@/types";

const _items: ITrashItem[] = [
  {
    id: "1",
    image: "black1",
    position: 0.0,
    type: "black",
    animationDuration: 10,
  },
  {
    id: "2",
    image: "brown1",
    position: 0.1,
    type: "brown",
    animationDuration: 10,
  },

  {
    id: "3",
    image: "green1",
    position: 0.2,
    type: "green",
    animationDuration: 10,
  },
];
export default function Game() {
  const [items, setItems] = useState(_items);

  const animationDuration = 3;

  useEffect(() => {
    setInterval(() => {
      setItems((items) =>
        items.map((item) => ({
          ...item,
          id: Math.ceil(Math.random() * 100000).toString(),
        })),
      );
    }, animationDuration * 1000);
  }, []);
  return (
    <div className="h-screen w-1/3">
      <ConveyerBelt items={items} animationDuration={animationDuration} />
    </div>
  );
}
