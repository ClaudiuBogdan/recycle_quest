import RecyclingBin from "./RecyclingBin";
import { RecycleBinType, Size } from "./types";
interface BinsProps {
  size: Size;
  onBinClick: (type: RecycleBinType) => void;
}

const Bins: React.FC<BinsProps> = ({ size, onBinClick }) => {
  const handleClick = (type: RecycleBinType) => {
    onBinClick(type);
  };
  return (
    <div
      className="w-full gap-3 justify-between cursor-pointer flex absolute bottom-10 outline-none"
      style={{
        width: `${size.width}px`,
        height: `${size.height}px`,
      }}
    >
      <RecyclingBin type={"green"} onClick={handleClick} label={"sticla"} />
      <RecyclingBin type={"yellow"} onClick={handleClick} label={"plastic"} />
      <RecyclingBin type={"blue"} onClick={handleClick} label={"hartie"} />
      <RecyclingBin type={"brown"} onClick={handleClick} label={"organic"} />
      <RecyclingBin type={"black"} onClick={handleClick} label={"rezidual"} />
    </div>
  );
};

export default Bins;
