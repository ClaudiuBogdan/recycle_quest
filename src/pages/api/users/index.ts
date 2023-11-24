import type { NextApiResponse } from "next";
import {
  Body,
  Catch,
  Post,
  Response,
  ValidationPipe,
  createHandler,
} from "next-api-decorators";
import { setCookie } from "nookies";
import FirestoreUserAdapter from "@/adapters/firebase/UserAdapter";
import { logExceptionHandler } from "@/adapters/sentry";
import UserService from "@/services/UserService";
import { IUserService } from "./../../../interfaces/IUserService";
import { CreateUserInput } from "./_types";

@Catch(logExceptionHandler)
class UserHandler {
  private userService: IUserService;

  constructor() {
    const userAdapter = new FirestoreUserAdapter();
    this.userService = new UserService(userAdapter);
  }

  @Post()
  async createUser(
    @Body(ValidationPipe({ whitelist: true })) body: CreateUserInput,
    @Response() res: NextApiResponse,
  ) {
    const { username } = body; // FIXME change to nickname
    const user = await this.userService.createUser(username);
    setTokenCookies(res, user.token);
    return { nickname: user.nickname };
  }
}

function setTokenCookies(res: NextApiResponse, access_token: string) {
  setCookie({ res }, "token", access_token, {
    httpOnly: true, // Secure cookie, not accessible via JavaScript
    secure: process.env.NODE_ENV !== "development", // Use secure in production
    maxAge: 60 * 60 * 24 * 7 * 4, // 4 week
    sameSite: "strict", // CSRF protection
    path: "/",
  });
}

export default createHandler(UserHandler);
