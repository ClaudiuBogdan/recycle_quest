import GameService from "@/services/GameService";
import UserService from "@/services/UserService";
import { DbGameAdapter, DbUserAdapter } from "../firebase";

export async function fetchUser(token: string) {
  const userAdapter = new DbUserAdapter();
  const userService = new UserService(userAdapter);
  return userService.getUserByToken(token);
}

export async function fetchGameData(gameId: string) {
  const gameDbAdapter = new DbGameAdapter();
  const gameService = new GameService(gameDbAdapter);
  return gameService.getGameById(gameId);
}
