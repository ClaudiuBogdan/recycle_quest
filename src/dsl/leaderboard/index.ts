import { LeaderboardEntry } from "@/types";
import { getAllUsers } from "../users";

export const getLeaderboard = async (): Promise<LeaderboardEntry[]> => {
  const users = await getAllUsers(); // Fixme: should get the data from firebase leaderboard collection

  const leaderboard = users
    .filter((user) => !!user.highscore)
    .sort((a, b) => b.highscore - a.highscore)
    .slice(0, 10)
    .map((user) => ({
      id: user.id,
      username: user.username,
      highscore: user.highscore,
    }));

  return leaderboard;
};
