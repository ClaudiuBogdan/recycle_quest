import { useEffect, useRef } from "react";

interface TrashItemProps {
  // width: string;
  speed: number;
}

const TrashItem: React.FC<TrashItemProps> = ({ speed }) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const lastTime = useRef(0);

  useEffect(() => {
    let animationId: number;
    const animate = (timestamp: number) => {
      const currentTime = timestamp;
      const deltaTime = (currentTime - lastTime.current) / 1000;
      if (deltaTime > 0) {
        lastTime.current = currentTime;
      }

      if (itemRef.current) {
        const currentY =
          parseFloat(
            itemRef.current.style.transform
              .replace("translateY(", "")
              .replace("px)", ""),
          ) || 0;
        const newY = currentY + speed * deltaTime;
        itemRef.current.style.transform = `translateY(${newY}px)`;
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [speed]);
  return (
    <div className="w-20 h-20 bg-white absolute top-0" ref={itemRef}>
      Trash
    </div>
  );
};

export default TrashItem;
