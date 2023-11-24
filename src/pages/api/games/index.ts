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
import { DbGameAdapter, DbLeaderboardAdapter } from "@/adapters/firebase";
import { logExceptionHandler } from "@/adapters/sentry";
import { IGameService } from "@/interfaces/IGameService";
import { ILeaderboardService } from "@/interfaces/ILeaderboardService";
import { GameData } from "@/models/Game";
import GameService from "@/services/GameService";
import LeaderboardService from "@/services/LeaderboardService";
import { EndGameInput, GameQueryDto } from "./_types";
import { UserTokenGuard } from "../_guard";

@Catch(logExceptionHandler)
class GamesHandler {
  private gameService: IGameService;
  private leaderboardService: ILeaderboardService;

  constructor() {
    const gameDbAdapter = new DbGameAdapter();
    const leaderboardDbAdapter = new DbLeaderboardAdapter();
    this.gameService = new GameService(gameDbAdapter);
    this.leaderboardService = new LeaderboardService(leaderboardDbAdapter);
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

    const leaderboardData = {
      userId: user.id,
      nickname: user.nickname,
      gameId: game.id,
      score: game.score,
    };

    await this.leaderboardService.updateHighScore(leaderboardData);
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
