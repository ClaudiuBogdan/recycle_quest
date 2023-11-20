import { RecycleBinType } from "./types";

type RecyclingBinProps = {
  type: RecycleBinType;
  label: string;
  onClick: (type: string) => void;
};

const RecyclingBin: React.FC<RecyclingBinProps> = ({
  type,
  label,
  onClick,
}) => {
  return (
    <div className="bg-green-400 w-full" onClick={() => onClick(type)}>
      <div>{label}</div> <div>{type}</div>
    </div>
  );
};

export default RecyclingBin;
