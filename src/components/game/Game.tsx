"use client";
import { useCallback, useEffect, useState } from "react";
import { GameEvent } from "@/models/Game";
import Bins from "./Bins";
import ConveyorBelt from "./ConveryorBelt";
import Lives from "./Lives";
import Score from "./Score";
import {
  createItemSelectedEvent,
  createMissItemEvent,
  useEvents,
} from "./hooks/useEvents";
import { useItems } from "./hooks/useItems";
import { useLives } from "./hooks/useLives";
import { useScore } from "./hooks/useScore";
import useSize from "./hooks/useSize";
import useSpeed from "./hooks/useSpeed";
import { useValidationAnimation } from "./hooks/useValidationAnimation";
import { ITrashItem, RecycleBinType } from "./types";

interface GameProps {
  onGameEnded: (args: {
    startedAt: Date;
    endedAt: Date;
    events: GameEvent[];
    score: number;
  }) => void;
}

const Game: React.FC<GameProps> = ({ onGameEnded }) => {
  const [startedAt] = useState(new Date());
  const [gameEnded, setGameEnded] = useState(false);
  const { setState: setValidationState, color } = useValidationAnimation();
  const { items, removeItem, getFirstItem, verifyBinSelection } = useItems();
  const { events, addEvent } = useEvents();
  const { lives, removeLife } = useLives();
  const { scoreState, updateScore } = useScore();
  const speed = useSpeed(gameEnded);
  const { conveyorBeltSize, binsSize } = useSize();

  useEffect(() => {
    if (lives <= 0) {
      setGameEnded(true);
      onGameEnded({
        startedAt,
        endedAt: new Date(),
        events,
        score: scoreState.score,
      });
    }
  }, [lives, onGameEnded, startedAt, events, scoreState]);

  const handleGameEvent = useCallback(
    (event: GameEvent) => {
      addEvent(event);
      updateScore(event);
    },
    [updateScore, addEvent],
  );

  const handleOverflow = useCallback(
    (item: ITrashItem) => {
      const event = createMissItemEvent(item.image);
      removeItem(item.id);
      removeLife();
      setValidationState("missed");
      handleGameEvent(event);
    },
    [removeItem, removeLife, setValidationState, handleGameEvent],
  );

  const handleBinClick = (binType: RecycleBinType) => {
    if (gameEnded) {
      return;
    }
    const item = getFirstItem();
    if (!item) {
      return;
    }
    const event = createItemSelectedEvent(item.image, item.type, binType);
    handleGameEvent(event);
    const isValid = verifyBinSelection(item, binType);

    if (isValid) {
      removeItem(item.id);
      setValidationState("valid");
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
      <Score count={scoreState.score} />
    </div>
  );
};

export default Game;
