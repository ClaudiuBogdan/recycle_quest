import { Transform } from "class-transformer";
import { IsNotEmpty, Length } from "class-validator";
import { transformOffensiveNickname } from "./_transformer";
import { IsNicknameAlreadyExist } from "./_validator";

export class CreateUserInput {
  @IsNotEmpty()
  @Transform(({ value }) => transformOffensiveNickname(value.trim()))
  @Length(3, 30)
  @IsNicknameAlreadyExist()
  nickname!: string;
}
