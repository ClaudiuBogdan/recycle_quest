import React, { useState } from "react";
import BasicTutorial from "./BasicTutorial";
import InformationOverlay from "./InformationOverlay";
import { levels } from "./data";
import { LevelMetadata } from "./types";

interface TutorialProps {
  onComplete: (metadata: LevelMetadata[]) => void;
}

const TutorialComponent: React.FC<TutorialProps> = ({ onComplete }) => {
  const [level, setLevel] = useState(0);
  const [metadata, setMetadata] = useState<LevelMetadata[]>([]);
  const handleLevelEnded = (args: LevelMetadata) => {
    setMetadata((data) => [...data, args]);
    setLevel((level) => level + 1);
  };

  const handleEndScreenClose = () => {
    onComplete(metadata);
  };

  const levelData = levels[level];
  return (
    <div>
      {levelData && (
        <BasicTutorial
          key={levelData.id}
          id={levelData.id}
          level={level}
          bins={levelData.bins}
          scoreThreshold={levelData.scoreThreshold}
          trashItems={levelData.trashItems}
          info={levelData.info}
          onTutorialEnded={handleLevelEnded}
        />
      )}
      {!levelData && (
        <InformationOverlay
          title={"Tutorial completat"}
          message={
            "Felicitări, ai completat tutorialul! Acum ești pregătit să devii un super-erou al reciclării. Folosește cunoștințele dobândite pentru a face alegeri mai bune în reciclare și pentru a proteja mediul. E timpul să îți aplici abilitățile în joc și în viața de zi cu zi. Haide să începem!"
          }
          buttonText={"Menu principal"}
          onClose={handleEndScreenClose}
        />
      )}
    </div>
  );
};

export default TutorialComponent;
