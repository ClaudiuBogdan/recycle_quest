import { useState } from "react";
import {
  GameEvent,
  ItemMissedEvent,
  ItemSelectedEvent,
  RecycleBinType,
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
