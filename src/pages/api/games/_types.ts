import { Transform } from "class-transformer";
import { IsArray, IsNotEmpty, IsPositive, IsUUID } from "class-validator";
import { GameEvent } from "@/models/Game";

// Use this data structure after migration
export class EndGameInput {
  @IsNotEmpty()
  @Transform(({ value }) => new Date(value))
  startedAt!: Date;

  @IsNotEmpty()
  @Transform(({ value }) => new Date(value))
  endedAt!: Date;

  @IsArray()
  events!: GameEvent[];

  @IsPositive()
  score!: number;
}

export class GameQueryDto {
  @IsNotEmpty()
  @IsUUID()
  id!: string;
}
