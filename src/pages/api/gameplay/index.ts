import type { NextApiRequest } from "next";
import {
  Body,
  Catch,
  Get,
  Post,
  Query,
  Req,
  ValidationPipe,
  createHandler,
} from "next-api-decorators";
import { logExceptionHandler } from "@/adapters/sentry";
import { addUserscore, getGamePlayData } from "@/dsl/gameplay";
import { GameQueryDto, OldEndGameInput } from "./_types";
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

  @Get()
  @UserTokenGuard()
  async getGame(@Query(ValidationPipe()) query: GameQueryDto) {
    const { id: gameId } = query;
    const gamePlay = await getGamePlayData(gameId);
    return gamePlay;
  }
}

export default createHandler(UserHandler);
