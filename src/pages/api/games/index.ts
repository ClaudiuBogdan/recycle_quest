import type { NextApiRequest } from "next";
import {
  Body,
  Catch,
  Post,
  Req,
  ValidationPipe,
  createHandler,
} from "next-api-decorators";
import { logExceptionHandler } from "@/adapters/sentry";
import { addUserscore } from "@/dsl/gameplay";
import { OldEndGameInput } from "./_types";
import { UserTokenGuard } from "../_guard";

@Catch(logExceptionHandler)
class UserHandler {
  @Post()
  @UserTokenGuard()
  async endGame(
    @Body(ValidationPipe({ whitelist: true })) body: OldEndGameInput,
    @Req() req: NextApiRequest,
  ) {
    const user = req.ctx!.user!;
    const game = await addUserscore(user, body);

    return {
      id: game.id,
    };
  }
}

export default createHandler(UserHandler);
