import RecyclingBin from "./RecyclingBin";

interface BinsProps {
  onBinClick: (type: string) => void;
}

const Bins: React.FC<BinsProps> = ({ onBinClick }) => {
  const handleClick = (type: string) => {
    onBinClick(type);
  };
  return (
    <div className="w-full gap-3 cursor-pointer flex absolute bottom-0 ">
      <RecyclingBin type={"green"} onClick={handleClick} label={"sticla"} />
      <RecyclingBin type={"yellow"} onClick={handleClick} label={"plastic"} />
      <RecyclingBin type={"blue"} onClick={handleClick} label={"hartie"} />
      <RecyclingBin type={"brown"} onClick={handleClick} label={"organic"} />
      <RecyclingBin type={"black"} onClick={handleClick} label={"rezidual"} />
    </div>
  );
};

export default Bins;
