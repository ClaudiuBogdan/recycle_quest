import { RecycleBinType } from "./types";

interface RecyclingBinProps {
  type: RecycleBinType;
  label: string;
  onClick: (type: string) => void;
}

const RecyclingBin: React.FC<RecyclingBinProps> = ({
  type,
  label,
  onClick,
}) => {
  return (
    <div className="w-20 h-20 bg-green-400 " onClick={() => onClick(type)}>
      <div>{label}</div> <div>{type}</div>
    </div>
  );
};

export default RecyclingBin;
