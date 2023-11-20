"use client";
import { useCallback, useEffect, useState } from "react";
import Bins from "./Bins";
import ConveyorBelt from "./ConveryorBelt";
import Lives from "./Lives";
import { useItems } from "./hooks/useItems";
import { useLives } from "./hooks/useLives";
import useSpeed from "./hooks/useSpeed";

interface GameProps {}

const Game: React.FC<GameProps> = () => {
  // Create a queue with items
  // Make the items to move in the conveyor belt
  // Remove the last item when the user click a container
  // Remove the last item when the item reaches the end of the conveyor belt
  // Add feedback when losing a life
  const [gameEnded, setGameEnded] = useState(false);
  const { items, removeItem, verifyBinSelection } = useItems();
  const { lives, removeLife } = useLives();
  const speed = useSpeed(gameEnded);

  useEffect(() => {
    if (lives <= 0) {
      setGameEnded(true);
    }
  }, [lives]);

  const handleOverflow = useCallback(
    (itemId: number) => {
      removeItem(itemId);
      removeLife();
    },
    [removeItem, removeLife],
  );

  const handleBinClick = (binType: string) => {
    if (gameEnded) {
      return;
    }
    const item = verifyBinSelection(binType);
    if (item) {
      removeItem(item.id);
    } else {
      removeLife();
    }
  };

  return (
    <div className="w-50 h-screen bg-yellow-200 relative overflow-hidden">
      <ConveyorBelt speed={speed} onOverflow={handleOverflow} items={items} />
      <Bins onBinClick={handleBinClick} />
      <Lives count={lives} />
    </div>
  );
};

export default Game;
