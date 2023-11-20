"use client";
import { useCallback, useEffect, useState } from "react";
import Bins from "./Bins";
import ConveyorBelt from "./ConveryorBelt";
import Lives from "./Lives";
import { useItems } from "./hooks/useItems";
import { useLives } from "./hooks/useLives";
import useSize from "./hooks/useSize";
import useSpeed from "./hooks/useSpeed";

interface GameProps {}

const Game: React.FC<GameProps> = () => {
  const [gameEnded, setGameEnded] = useState(false);
  const { items, removeItem, verifyBinSelection } = useItems();
  const { lives, removeLife } = useLives();
  const speed = useSpeed(gameEnded);
  const { conveyorBeltSize, binsSize } = useSize();

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
    <div className="h-screen bg-yellow-200 relative overflow-hidden flex justify-center">
      <ConveyorBelt
        speed={speed}
        onOverflow={handleOverflow}
        items={items}
        size={conveyorBeltSize}
      />
      <Bins onBinClick={handleBinClick} size={binsSize} />
      <Lives count={lives} />
    </div>
  );
};

export default Game;
