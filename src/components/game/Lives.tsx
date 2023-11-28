import { useMemo } from "react";

interface LivesProps {
  total: number;
  current: number;
}

const Lives: React.FC<LivesProps> = ({ total, current }) => {
  const livesIcons = useMemo(() => {
    const remaining = new Array(current).fill("❤️");
    const lost = new Array(total - current).fill("🤍");
    return [...lost, ...remaining].join(" ");
  }, [total, current]);
  return (
    <div
      className="absolute top-1/2 right-1/2 translate-y-[-50%] translate-x-[170%] bg-black text-white text-center font-extrabold shadow-lg rounded-lg p-5"
      style={{ fontSize: "min(4vw, 2vh)", width: "min(30vw, 20vh)" }}
    >
      {livesIcons}
    </div>
  );
};

export default Lives;
