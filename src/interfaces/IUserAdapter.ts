import { UserData } from "@/models/User";

export interface IUserAdapter {
  createUser(userData: UserData): Promise<UserData>;
  getUserById(userId: string): Promise<UserData | null>;
  getUserByNickname(userId: string): Promise<UserData | null>;
  getUserByToken(userId: string): Promise<UserData | null>;
}
