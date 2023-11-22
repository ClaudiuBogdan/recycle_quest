import { Catch, Get, createHandler } from "next-api-decorators";
import { logExceptionHandler } from "@/adapters/sentry";
import { getLeaderboard } from "./../../../dsl/leaderboard/index";
import { UserTokenGuard } from "../_guard";

@Catch(logExceptionHandler)
class LeaderBoardHandler {
  @Get()
  @UserTokenGuard()
  async getLeaderboardApi() {
    return getLeaderboard();
  }
}

export default createHandler(LeaderBoardHandler);
