import React from "react";
import { YellowBin } from "@/data/trashBins";
import { yellowTrashItems } from "@/data/trashItems";
import { GameEvent } from "@/models/Game";
import BasicTutorial from "./BasicTutorial";

interface TutorialProps {
  // Define your props here
}

const TutorialComponent: React.FC<TutorialProps> = () => {
  const handleLevelEnded = (args: {
    startedAt: string;
    endedAt: string;
    events: GameEvent[];
  }) => {
    console.log("Level ended", args);
  };
  return (
    <div>
      <BasicTutorial
        bins={[YellowBin]}
        trashItems={yellowTrashItems}
        onTutorialEnded={handleLevelEnded}
      />
    </div>
  );
};

export default TutorialComponent;
