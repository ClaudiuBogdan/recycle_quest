import { Transform } from "class-transformer";
import { IsNotEmpty, Length } from "class-validator";
import { IsUsernameAlreadyExist } from "./_validator";

export class CreateUserInput {
  @IsNotEmpty()
  @Transform(({ value }) => value.trim())
  @Length(3, 30)
  @IsUsernameAlreadyExist()
  username!: string;
}
