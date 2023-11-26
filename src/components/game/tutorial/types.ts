import { GameEvent } from "@/models/Game";

export type LevelMetadata = {
  id: string;
  level: number;
  startedAt: string;
  endedAt: string;
  events: GameEvent[];
};
