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
import { DbGameAdapter } from "@/adapters/firebase";
import { logExceptionHandler } from "@/adapters/sentry";
import { IGameService } from "@/interfaces/IGameService";
import { GameData } from "@/models/Game";
import GameService from "@/services/GameService";
import { EndGameInput, GameQueryDto } from "./_types";
import { UserTokenGuard } from "../_guard";

@Catch(logExceptionHandler)
class GamesHandler {
  private gameService: IGameService;

  constructor() {
    const gameAdapter = new DbGameAdapter();
    this.gameService = new GameService(gameAdapter);
  }

  @Post()
  @UserTokenGuard()
  async endGame(
    @Body(ValidationPipe({ whitelist: true })) body: EndGameInput,
    @Req() req: NextApiRequest,
  ) {
    const user = req.ctx!.user!;

    const gameData: Omit<GameData, "id"> = {
      userId: user.id,
      ...body,
    };

    const game = await this.gameService.createGame(gameData);
    return {
      id: game.id,
    };
  }

  @Get()
  @UserTokenGuard()
  async getGame(
    @Query(ValidationPipe()) query: GameQueryDto,
    @Req() req: NextApiRequest,
  ) {
    const { id: gameId } = query;
    const gamePlay = this.gameService.getGameById(gameId);
    const user = req.ctx!.user!;

    return {
      ...gamePlay,
      username: user.username,
      highscore: user.highscore,
    };
  }
}

export default createHandler(GamesHandler);
