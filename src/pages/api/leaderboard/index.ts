import { Catch, Get, createHandler } from "next-api-decorators";
import { logExceptionHandler } from "@/adapters/sentry";
import { getAllUsers } from "@/dsl/users";
import { UserTokenGuard } from "../_guard";

@Catch(logExceptionHandler)
class LeaderBoardHandler {
  @Get()
  @UserTokenGuard()
  async getLeaderBoard() {
    const users = await getAllUsers();

    const leaderBoard = users
      .filter((user) => !!user.highscore)
      .sort((a, b) => b.highscore - a.highscore)
      .slice(0, 10)
      .map((user) => ({
        id: user.id,
        username: user.username,
        highscore: user.highscore,
      }));

    return leaderBoard;
  }
}

export default createHandler(LeaderBoardHandler);
