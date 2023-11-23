import { UserData } from "@/models/User";

export interface IUserService {
  createUser(username: string): Promise<UserData>;
  getUserById(userId: string): Promise<UserData | null>;
  getUserByNickname(nickname: string): Promise<UserData | null>;
  getUserByToken(nickname: string): Promise<UserData | null>;
}
