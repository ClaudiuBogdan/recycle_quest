import * as uuid from "uuid";
import { IUserService } from "@/interfaces/IUserService";
import { UserData } from "@/models/User";
import { IUserAdapter } from "../interfaces/IUserAdapter";

class UserService implements IUserService {
  constructor(private userAdapter: IUserAdapter) {}

  async createUser(nickname: string): Promise<UserData> {
    const userData: UserData = {
      id: uuid.v4(),
      nickname,
      token: uuid.v4(),
      lastPlayed: null,
      highScore: 0,
    };
    return this.userAdapter.createUser(userData);
  }

  async getUserById(userId: string): Promise<UserData | null> {
    return this.userAdapter.getUserById(userId);
  }

  async getUserByNickname(nickname: string): Promise<UserData | null> {
    return this.userAdapter.getUserByNickname(nickname);
  }

  async getUserByToken(nickname: string): Promise<UserData | null> {
    return this.userAdapter.getUserByToken(nickname);
  }
}

export default UserService;
