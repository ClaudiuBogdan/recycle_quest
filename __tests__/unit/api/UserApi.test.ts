import { createMocks } from "node-mocks-http";
import { setCookie } from "nookies";
import userApiHandler from "@/pages/api/users";
import UserService from "@/services/UserService";

jest.mock("../../../src/services/UserService");
jest.mock("nookies", () => ({
  setCookie: jest.fn(),
}));

describe("User API", () => {
  beforeEach(() => {
    // Reset mocks before each test
    jest.resetAllMocks();
  });

  it("should create a user with valid input", async () => {
    const mockCreateUser = UserService.prototype
      .createUser as jest.MockedFunction<
      typeof UserService.prototype.createUser
    >;
    const mockGetUserByNickname = UserService.prototype
      .getUserByNickname as jest.MockedFunction<
      typeof UserService.prototype.getUserByNickname
    >;
    mockGetUserByNickname.mockResolvedValue(null);

    mockCreateUser.mockResolvedValue({
      id: "user-123",
      nickname: "testuser",
      token: "token-123",
      createdAt: new Date(),
    });

    const { req, res } = createMocks({
      method: "POST",
      path: "/users",
      body: {
        username: "testuser",
      },
    });

    // @ts-expect-error req not matches the same type
    await userApiHandler(req, res);

    expect(res._getStatusCode()).toBe(200);
    expect(res._getData()).toEqual({
      nickname: "testuser",
    });

    expect(setCookie).toHaveBeenCalledWith(
      expect.anything(), // The response object
      "token",
      "token-123", // The token value
      expect.objectContaining({
        httpOnly: true,
        secure: expect.any(Boolean),
        maxAge: expect.any(Number),
        sameSite: "strict",
        path: "/",
      }),
    );
  });

  it("should return 400 if the nickname already exists", async () => {
    const mockCreateUser = UserService.prototype
      .createUser as jest.MockedFunction<
      typeof UserService.prototype.createUser
    >;
    const mockGetUserByNickname = UserService.prototype
      .getUserByNickname as jest.MockedFunction<
      typeof UserService.prototype.getUserByNickname
    >;
    mockGetUserByNickname.mockResolvedValue({
      id: "user-123",
      nickname: "testuser",
      token: "token-123",
      createdAt: new Date(),
    });

    mockCreateUser.mockResolvedValue({
      id: "user-123",
      nickname: "testuser",
      token: "token-123",
      createdAt: new Date(),
    });

    const { req, res } = createMocks({
      method: "POST",
      path: "/users",
      body: {
        username: "testuser",
      },
    });

    // @ts-expect-error req not matches the same type
    await userApiHandler(req, res);

    expect(res._getStatusCode()).toBe(400);
    expect(res._getJSONData()).toEqual({
      statusCode: 400,
      message: "Username testuser is already taken. Please choose another one.",
      errors: [
        "Username testuser is already taken. Please choose another one.",
      ],
    });

    expect(setCookie).not.toHaveBeenCalled();
  });
});
