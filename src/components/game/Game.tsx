"use client";
import { useCallback, useEffect, useState } from "react";
import Bins from "./Bins";
import ConveyorBelt from "./ConveryorBelt";
import Lives from "./Lives";
import Score from "./Score";
import { useItems } from "./hooks/useItems";
import { useLives } from "./hooks/useLives";
import { useScore } from "./hooks/useScore";
import useSize from "./hooks/useSize";
import useSpeed from "./hooks/useSpeed";
import { useValidationAnimation } from "./hooks/useValidationAnimation";
import { ITrashItemApi, RecycleBinType } from "./types";

interface GameProps {
  onGameEnded: (items: ITrashItemApi[]) => void;
}

const Game: React.FC<GameProps> = ({ onGameEnded }) => {
  const [gameEnded, setGameEnded] = useState(false);
  const { setState: setValidationState, color } = useValidationAnimation();
  const { items, itemsRemovedRef, removeItem, verifyBinSelection } = useItems();
  const { lives, removeLife } = useLives();
  const { score, incrementScore } = useScore();
  const speed = useSpeed(gameEnded);
  const { conveyorBeltSize, binsSize } = useSize();

  useEffect(() => {
    if (lives <= 0) {
      setGameEnded(true);
      onGameEnded([...itemsRemovedRef.current.values()]);
    }
  }, [lives, onGameEnded, itemsRemovedRef]);

  const handleOverflow = useCallback(
    (itemId: number) => {
      removeItem(itemId, "missed", "none");
      removeLife();
      setValidationState("missed");
    },
    [removeItem, removeLife, setValidationState],
  );

  const handleBinClick = (binType: RecycleBinType) => {
    if (gameEnded) {
      return;
    }
    const item = verifyBinSelection(binType);
    if (item) {
      removeItem(item.id, "valid", binType);
      setValidationState("valid");
      incrementScore();
    } else {
      removeLife();
      setValidationState("missed");
    }
  };

  return (
    <div
      className={`h-screen ${color} transition duration-300 relative overflow-hidden flex justify-center`}
    >
      <ConveyorBelt
        speed={speed}
        onOverflow={handleOverflow}
        items={items}
        size={conveyorBeltSize}
      />
      <Bins onBinClick={handleBinClick} size={binsSize} />
      <Lives count={lives} />
      <Score count={score} />
    </div>
  );
};

export default Game;
