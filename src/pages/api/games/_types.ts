import { IsArray, IsNotEmpty, IsUUID, Min } from "class-validator";
import { GameEvent } from "@/models/Game";

// Use this data structure after migration
export class EndGameInput {
  @IsNotEmpty()
  startedAt!: string;

  @IsNotEmpty()
  endedAt!: string;

  @IsArray()
  events!: GameEvent[];

  @Min(0)
  score!: number;
}

export class GameQueryDto {
  @IsNotEmpty()
  @IsUUID()
  id!: string;
}
