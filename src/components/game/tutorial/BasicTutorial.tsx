"use client";
import { useCallback, useEffect, useState } from "react";
import { BinData, RecycleBinType } from "@/models/Bin";
import { GameEvent } from "@/models/Game";
import { TrashItemData } from "@/models/TrashItem";
import InformationOverlay from "./InformationOverlay";
import { LevelMetadata } from "./types";
import Bins from "../Bins";
import ConveyorBelt from "../ConveryorBelt";
import {
  createItemSelectedEvent,
  createMissItemEvent,
  useEvents,
} from "../hooks/useEvents";
import { useItems } from "../hooks/useItems";
import { useScore } from "../hooks/useScore";
import useSize from "../hooks/useSize";
import useSpeed from "../hooks/useSpeed";
import { useValidationAnimation } from "../hooks/useValidationAnimation";
import { ITrashItemUI } from "../types";

type InformationOverlayProps = {
  title: string;
  message: string;
  buttonText: string;
};

interface BasicTutorialProps {
  id: string;
  level: number;
  bins: BinData[];
  trashItems: TrashItemData[];
  scoreThreshold: number;
  info: InformationOverlayProps;
  onTutorialEnded: (args: LevelMetadata) => void;
}

const BasicTutorial: React.FC<BasicTutorialProps> = ({
  id,
  level,
  bins,
  trashItems,
  scoreThreshold,
  info,
  onTutorialEnded,
}) => {
  const [paused, setPaused] = useState(true);
  const [showOverlay, setShowOverlay] = useState(true);
  const [startedAt] = useState(new Date().toISOString());
  const [tutorialEnded, setTutorialEnded] = useState(false);
  const { setState: setValidationState, color } = useValidationAnimation();
  const { items, removeItem, getFirstItem, verifyBinSelection } =
    useItems(trashItems);
  const { events, addEvent } = useEvents();
  const speed = useSpeed({
    paused: tutorialEnded || paused,
    constantSpeed: true,
  });
  const { score, updateScore } = useScore();
  const { conveyorBeltSize, binsSize } = useSize();

  useEffect(() => {
    if (score >= scoreThreshold) {
      setTutorialEnded(true);
    }
  }, [score, scoreThreshold]);

  useEffect(() => {
    if (!tutorialEnded) {
      return;
    }
    onTutorialEnded({
      id,
      level,
      startedAt,
      endedAt: new Date().toISOString(),
      events,
    });
  }, [id, level, tutorialEnded, onTutorialEnded, startedAt, events]);

  const handleGameEvent = useCallback(
    (event: GameEvent) => {
      addEvent(event);
      updateScore(event);
    },
    [addEvent, updateScore],
  );

  const handleOverflow = useCallback(
    (item: ITrashItemUI) => {
      const event = createMissItemEvent(item.imageId);
      removeItem(item.id);
      setValidationState("missed");
      handleGameEvent(event);
    },
    [removeItem, setValidationState, handleGameEvent],
  );

  const handleBinClick = (binType: RecycleBinType) => {
    if (tutorialEnded) {
      return;
    }
    const item = getFirstItem();
    if (!item) {
      return;
    }
    const event = createItemSelectedEvent(item.imageId, item.type, binType);
    handleGameEvent(event);
    const isValid = verifyBinSelection(item, binType);

    if (isValid) {
      removeItem(item.id);
      setValidationState("valid");
    } else {
      setValidationState("missed");
    }
  };

  const handleCloseInfo = () => {
    setShowOverlay(false);
    setPaused(false);
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
      <Bins
        bins={bins}
        top={conveyorBeltSize.height}
        onBinClick={handleBinClick}
        size={binsSize}
      />
      {showOverlay && (
        <InformationOverlay {...info} onClose={handleCloseInfo} />
      )}
    </div>
  );
};

export default BasicTutorial;
