import TrashItem from "./TrashItem";

type ConveyorBeltProps = {
  speed: number; // pixels per second
};

const ConveyorBelt: React.FC<ConveyorBeltProps> = ({ speed }) => {
  return (
    <div className="w-20 h-full bg-gray-600">
      <TrashItem speed={speed} />
      <TrashItem speed={speed} />
      <TrashItem speed={speed} />
      <TrashItem speed={speed} />
    </div>
  );
};

export default ConveyorBelt;
