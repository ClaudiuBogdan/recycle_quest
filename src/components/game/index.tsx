"use client";
import ConveyorBelt from "./ConveryorBelt";
import useSpeed from "./useSpeed";

interface GameProps {}

const Game: React.FC<GameProps> = () => {
  // Create a queue with items
  // Make the items to move in the conveyor belt
  // Remove the last item when the user click a container
  // Remove the last item when the item reaches the end of the conveyor belt
  const speed = useSpeed();
  return (
    <div className="w-40 h-screen bg-yellow-200 relative">
      <ConveyorBelt speed={speed} />
    </div>
  );
};

export default Game;
