// UserService.test.ts

import * as uuid from "uuid";
import { IUserAdapter } from "@/interfaces/IUserAdapter";
import { UserData } from "@/models/User";
import UserService from "@/services/UserService";

// Mock the IUserAdapter
const mockUserAdapter: jest.Mocked<IUserAdapter> = {
  createUser: jest.fn(),
  getUserById: jest.fn(),
  getUserByNickname: jest.fn(),
  getUserByToken: jest.fn(),
};

// Test data
const mockUserData: UserData = {
  id: uuid.v4(),
  nickname: "testuser",
  token: uuid.v4(),
  createdAt: new Date(),
};

describe("UserService", () => {
  let userService: UserService;

  beforeEach(() => {
    userService = new UserService(mockUserAdapter);
    jest.clearAllMocks();
  });

  it("should create a user", async () => {
    mockUserAdapter.createUser.mockResolvedValue(mockUserData);
    const result = await userService.createUser("testuser");
    expect(mockUserAdapter.createUser).toHaveBeenCalledWith(
      expect.objectContaining({ nickname: "testuser" }),
    );
    expect(result).toEqual(mockUserData);
  });

  it("should get a user by id", async () => {
    const userId = "user-id";
    mockUserAdapter.getUserById.mockResolvedValue(mockUserData);
    const result = await userService.getUserById(userId);
    expect(mockUserAdapter.getUserById).toHaveBeenCalledWith(userId);
    expect(result).toEqual(mockUserData);
  });

  it("should get a user by nickname", async () => {
    const nickname = "testuser";
    mockUserAdapter.getUserByNickname.mockResolvedValue(mockUserData);
    const result = await userService.getUserByNickname(nickname);
    expect(mockUserAdapter.getUserByNickname).toHaveBeenCalledWith(nickname);
    expect(result).toEqual(mockUserData);
  });

  it("should get a user by token", async () => {
    const token = "user-token";
    mockUserAdapter.getUserByToken.mockResolvedValue(mockUserData);
    const result = await userService.getUserByToken(token);
    expect(mockUserAdapter.getUserByToken).toHaveBeenCalledWith(token);
    expect(result).toEqual(mockUserData);
  });
});
