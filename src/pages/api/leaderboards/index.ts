import { Catch, Get, createHandler } from "next-api-decorators";
import { DbLeaderboardAdapter } from "@/adapters/firebase";
import { logExceptionHandler } from "@/adapters/sentry";
import { ILeaderboardService } from "@/interfaces/ILeaderboardService";
import LeaderboardService from "@/services/LeaderboardService";
import { UserTokenGuard } from "../_guard";

@Catch(logExceptionHandler)
class LeaderBoardHandler {
  private leaderboardService: ILeaderboardService;

  constructor() {
    const leaderboardAdapter = new DbLeaderboardAdapter();
    this.leaderboardService = new LeaderboardService(leaderboardAdapter);
  }

  @Get()
  @UserTokenGuard()
  async getLeaderboardApi() {
    return this.leaderboardService.getTopScores(20);
  }
}

export default createHandler(LeaderBoardHandler);
