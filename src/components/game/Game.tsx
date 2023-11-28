"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { trashBins } from "@/data/trashBins";
import { trashItems } from "@/data/trashItems";
import { RecycleBinType } from "@/models/Bin";
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
import { useQuiz } from "./hooks/useQuiz";
import { useScore } from "./hooks/useScore";
import useSize from "./hooks/useSize";
import useSpeed from "./hooks/useSpeed";
import { useValidationAnimation } from "./hooks/useValidationAnimation";
import Quiz from "./quiz/Quiz";
import { ITrashItemUI } from "./types";

interface GameProps {
  onGameEnded: (args: {
    startedAt: string;
    endedAt: string;
    events: GameEvent[];
    score: number;
  }) => void;
}

const Game: React.FC<GameProps> = ({ onGameEnded }) => {
  const [startedAt] = useState(new Date().toISOString());
  const [paused, setPaused] = useState(false);
  const { setState: setValidationState, color } = useValidationAnimation();
  const { items, removeItem, getFirstItem, verifyBinSelection } =
    useItems(trashItems);
  const { events, addEvent } = useEvents();
  const { lives, totalLives, removeLife } = useLives();
  const { score, updateScore } = useScore();
  const speed = useSpeed({ paused: paused });
  const { conveyorBeltSize, binsSize } = useSize();
  const { questions, generateQuestions, hasQuestions } = useQuiz();
  const lastQuizScoreRef = useRef(0);

  useEffect(() => {
    if (lives <= 0) {
      setPaused(true);
      onGameEnded({
        startedAt,
        endedAt: new Date().toISOString(),
        events,
        score,
      });
    }
  }, [lives, onGameEnded, startedAt, events, score]);

  useEffect(() => {
    const scoreInterval = 5;
    const scoreThreshold = lastQuizScoreRef.current + scoreInterval;
    if (score > scoreThreshold && hasQuestions) {
      lastQuizScoreRef.current = score;
      generateQuestions();
      setPaused(true);
    }
  }, [score, hasQuestions, generateQuestions]);

  const handleGameEvent = useCallback(
    (event: GameEvent) => {
      addEvent(event);
      updateScore(event);
    },
    [updateScore, addEvent],
  );

  const handleOverflow = useCallback(
    (item: ITrashItemUI) => {
      const event = createMissItemEvent(item.imageId);
      removeItem(item.id);
      removeLife();
      setValidationState("missed");
      handleGameEvent(event);
    },
    [removeItem, removeLife, setValidationState, handleGameEvent],
  );

  const handleBinClick = (binType: RecycleBinType) => {
    if (paused) {
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
      removeLife();
      setValidationState("missed");
    }
  };

  const handleQuizAnswer = (event: GameEvent) => {
    handleGameEvent(event);
    lastQuizScoreRef.current = score;
  };

  const handleQuizFinish = () => {
    setPaused(false);
  };

  return (
    <div
      className={`relative h-screen ${color} transition duration-300 overflow-hidden flex justify-center`}
    >
      <ConveyorBelt
        speed={speed}
        onOverflow={handleOverflow}
        items={items}
        size={conveyorBeltSize}
      />
      <Bins
        top={conveyorBeltSize.height}
        bins={trashBins}
        onBinClick={handleBinClick}
        size={binsSize}
      />
      <Lives current={lives} total={totalLives} />
      <Score count={score} />
      <Quiz
        questions={questions}
        onAnswer={handleQuizAnswer}
        onQuizFinish={handleQuizFinish}
      />
    </div>
  );
};

export default Game;
