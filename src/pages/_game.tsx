import { useCallback, useEffect, useState } from "react";
import Bins from "@/components/Bins";
import ConveyerBelt from "@/components/ConveyerBelt";
import GameHeader from "@/components/GameHeader";
import { trashItems } from "@/components/TrashItemImage";
import { config } from "@/config/game";
import { ITrashItem, TTrashItemType } from "@/types";
import { assignBinToItem, calculateSpawnRate, generateItem } from "@/utils";

export default function Game() {
  const [currentLevel, setCurrentLevel] = useState(1);
  const [items, setItems] = useState<ITrashItem[]>([]);
  const [animationDuration, setAnimationDuration] = useState(10);
  const [lifes, setLifes] = useState(3);
  const [score, setScore] = useState(0);

  function increaseDifficulty() {
    setAnimationDuration(
      (duration) => duration - duration * config.game.DIFFICULTY_INCREASE,
    );
    setCurrentLevel((lvl) => lvl + 1);
  }

  const decreaseLife = useCallback(() => {
    if (lifes <= 0) {
      //TODO show end game
      return;
    }

    setLifes((life) => life - 1);
  }, [lifes, setLifes]);

  useEffect(() => {
    const targetWaveSize = currentLevel * config.game.WAVE_ITEMS_NUMBER;

    const levelCleared =
      items.every((item) => item.selectedBin) &&
      items.length === targetWaveSize;

    if (levelCleared) {
      increaseDifficulty();
    }
  }, [currentLevel, items]);

  useEffect(() => {
    const spawnRate = calculateSpawnRate(
      animationDuration,
      config.game.WAVE_ITEMS_SPREAD,
    );
    const interval = setInterval(() => {
      setItems((items) => {
        const targetWaveSize = currentLevel * config.game.WAVE_ITEMS_NUMBER;
        // Generate items until we reached our target size
        if (items.length < targetWaveSize) {
          const item = generateItem(trashItems, animationDuration);

          // Add timeout in case user doesnt assign a bin to a item it is threw to none bin
          setTimeout(() => {
            if (!item.selectedBin) {
              item.selectedBin = "none";
              decreaseLife();
              setItems((trashItems) => [...trashItems]);
            }
          }, item.animationDuration * 1000);
          return [...items, item];
        }

        return items;
      });
    }, spawnRate * 1000);

    return () => {
      clearInterval(interval);
    };
  }, [
    currentLevel,
    setCurrentLevel,
    animationDuration,
    setAnimationDuration,
    setItems,
    decreaseLife,
  ]);

  const handleBinClick = (bin: TTrashItemType) => {
    const item = items.find((item) => !item.selectedBin);
    if (item) {
      const success = assignBinToItem(item, bin);
      if (!success) {
        decreaseLife();
      } else {
        setScore((score) => score + 1);
      }
      setItems([...items]);
    }
  };

  return (
    <div
      className="h-screen flex flex-col justify-center items-center"
      style={{
        minWidth: "185px",
        maxWidth: "50vh",
        margin: 0,
        padding: 0,
        backgroundImage: `url('/images/tail.png')`,
        backgroundRepeat: "repeat",
        backgroundSize: "auto",
      }}
    >
      <GameHeader score={score} lifes={lifes} />
      <ConveyerBelt items={items} animationDuration={animationDuration} />
      <Bins onBinClick={handleBinClick} />
    </div>
  );
}
