import { useEffect, useRef } from "react";

interface TrashItemProps {
  // width: string;
  speed: number;
}

const TrashItem: React.FC<TrashItemProps> = ({ speed }) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const lastTime = useRef(Date.now());

  useEffect(() => {
    const animate = () => {
      const currentTime = Date.now();
      const deltaTime = (currentTime - lastTime.current) / 1000; // in seconds
      lastTime.current = currentTime;

      if (itemRef.current) {
        const currentX =
          parseFloat(
            itemRef.current.style.transform
              .replace("translateY(", "")
              .replace("px)", ""),
          ) || 0;
        const newX = currentX + speed * deltaTime;
        itemRef.current.style.transform = `translateY(${newX}px)`;
      }

      requestAnimationFrame(animate);
    };

    const id = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(id);
  }, [speed]);
  return (
    <div className="w-20 h-20 bg-white absolute top-0" ref={itemRef}>
      Trash
    </div>
  );
};

export default TrashItem;
