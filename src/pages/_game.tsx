import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { useEndGame } from "@/adapters/api/game";
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
  const { endGame, data, loading } = useEndGame();
  const router = useRouter();

  function increaseDifficulty() {
    setAnimationDuration(
      (duration) => duration - duration * config.game.DIFFICULTY_INCREASE,
    );
    setCurrentLevel((lvl) => lvl + 1);
  }

  const decreaseLife = useCallback(() => {
    if (lifes <= 0) {
      return;
    }

    setLifes((life) => (life > 0 ? life - 1 : 0));
  }, [lifes]);

  useEffect(() => {
    if (lifes > 0 || data || loading) {
      return;
    }
    const result: Array<{ asset_name: string; container: string }> = items.map(
      (item) => ({
        asset_name: item.image,
        container: item.selectedBin || "",
      }),
    );
    console.log("End game");
    endGame({ result })
      .then((res) => {
        if (!res) {
          return;
        }
        router
          .push(`/game/${res.id}`)
          .then(() => void 0)
          .catch((err) => console.error(err));
      })
      .catch(() => void 0);
  }, [lifes, endGame, items, data, loading]);

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
