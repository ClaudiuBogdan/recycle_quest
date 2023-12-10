import { BinData, RecycleBinType } from "@/models/Bin";
import { RecyclingBin } from "./RecyclingBin";
import { Size } from "./types";
interface BinsProps {
  bins: BinData[];
  size: Size;
  binIndicator?: RecycleBinType;
  top: number;
  onBinClick: (type: RecycleBinType) => void;
}

const Bins: React.FC<BinsProps> = ({
  bins,
  top,
  size,
  binIndicator,
  onBinClick,
}) => {
  const handleClick = (type: RecycleBinType) => {
    onBinClick(type);
  };
  return (
    <div
      className="w-full gap-3 flex justify-center text-center cursor-pointer absolute bottom-10 outline-none"
      style={{
        width: `${size.width}px`,
        height: `${size.height}px`,
        top: `${top + 8}px`,
      }}
    >
      {bins.map((bin) => (
        <RecyclingBin
          key={bin.type}
          type={bin.type}
          showIndicator={binIndicator === bin.type}
          onClick={handleClick}
          label={bin.label}
        />
      ))}
    </div>
  );
};

export default Bins;
