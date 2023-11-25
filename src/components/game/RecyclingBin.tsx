import { useEffect, useState } from "react";
import { RecycleBinType } from "@/models/Game";
import RecyclingBinImage from "./RecyclingBinImage";

type RecyclingBinProps = {
  type: RecycleBinType;
  label: string;
  onClick: (type: RecycleBinType) => void;
};

const RecyclingBin: React.FC<RecyclingBinProps> = ({
  type,
  label,
  onClick,
}) => {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => setClicked(false), 300);
    return () => clearTimeout(timeoutId);
  }, [clicked]);

  const handleClick = () => {
    onClick(type);
    setClicked(true);
  };

  return (
    <button
      className={`w-full ${clicked ? "bin-clicked" : ""}`}
      onClick={handleClick}
    >
      <RecyclingBinImage type={type} label={type} width={100} height={100} />
      <span className="absolute -bottom-5 text-gray-800 invisible">
        {label}
      </span>
    </button>
  );
};

export default RecyclingBin;
