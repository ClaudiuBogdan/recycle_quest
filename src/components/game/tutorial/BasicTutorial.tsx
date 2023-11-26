"use client";
import { useCallback, useEffect, useState } from "react";
import { BinData, RecycleBinType } from "@/models/Bin";
import { GameEvent } from "@/models/Game";
import { TrashItemData } from "@/models/TrashItem";
import Bins from "../Bins";
import ConveyorBelt from "../ConveryorBelt";
import {
  createItemSelectedEvent,
  createMissItemEvent,
  useEvents,
} from "../hooks/useEvents";
import { useItems } from "../hooks/useItems";
import useSize from "../hooks/useSize";
import useSpeed from "../hooks/useSpeed";
import { useValidationAnimation } from "../hooks/useValidationAnimation";
import { ITrashItemUI } from "../types";

interface BasicTutorialProps {
  bins: BinData[];
  trashItems: TrashItemData[];
  onTutorialEnded: (args: {
    startedAt: string;
    endedAt: string;
    events: GameEvent[];
  }) => void;
}

const BasicTutorial: React.FC<BasicTutorialProps> = ({
  bins,
  trashItems,
  onTutorialEnded,
}) => {
  const [startedAt] = useState(new Date().toISOString());
  const [tutorialEnded, setTutorialEnded] = useState(false);
  const { setState: setValidationState, color } = useValidationAnimation();
  const { items, removeItem, getFirstItem, verifyBinSelection } =
    useItems(trashItems);
  const { events, addEvent } = useEvents();
  const speed = useSpeed(tutorialEnded);
  const { conveyorBeltSize, binsSize } = useSize();

  useEffect(() => {
    if (!tutorialEnded) {
      return;
    }
    setTutorialEnded(true); // FIXME
    onTutorialEnded({
      startedAt,
      endedAt: new Date().toISOString(),
      events,
    });
  }, [tutorialEnded, onTutorialEnded, startedAt, events]);

  const handleGameEvent = useCallback(
    (event: GameEvent) => {
      addEvent(event);
    },
    [addEvent],
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
      <Bins bins={bins} onBinClick={handleBinClick} size={binsSize} />
    </div>
  );
};

export default BasicTutorial;
