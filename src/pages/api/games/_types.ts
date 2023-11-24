import { Transform } from "class-transformer";
import { IsArray, IsNotEmpty, IsUUID, Min } from "class-validator";
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

  @Min(0)
  score!: number;
}

export class GameQueryDto {
  @IsNotEmpty()
  @IsUUID()
  id!: string;
}
