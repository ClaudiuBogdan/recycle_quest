import { useState } from "react";
import { RecycleBinType } from "@/models/Bin";
import {
  GameEvent,
  ItemMissedEvent,
  ItemSelectedEvent,
  QuizItemEvent,
} from "@/models/Game";

export function useEvents() {
  const [events, setEvents] = useState<GameEvent[]>([]);

  const addEvent = (event: GameEvent) => {
    setEvents((events) => [...events, event]);
  };

  return { events, addEvent };
}

export function createItemSelectedEvent(
  itemId: string,
  itemType: RecycleBinType,
  binId: RecycleBinType,
): ItemSelectedEvent {
  return {
    type: "itemSelected",
    itemId,
    binId,
    isCorrect: itemType === binId,
    timestamp: new Date(),
  };
}

export function createMissItemEvent(itemId: string): ItemMissedEvent {
  return {
    type: "itemMissed",
    itemId,
    timestamp: new Date(),
  };
}

export function createQuizAnswerEvent(
  questionId: string,
  answerId: string,
  isCorrect: boolean,
): QuizItemEvent {
  return {
    type: "quizItem",
    questionId,
    answerId,
    isCorrect,
    timestamp: new Date(),
  };
}
