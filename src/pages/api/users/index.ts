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
import { logExceptionHandler } from "@/adapters/sentry";
import { createUser } from "@/dsl/users";
import { CreateUserInput } from "./_types";

@Catch(logExceptionHandler)
class UserHandler {
  @Post()
  async createUser(
    @Body(ValidationPipe({ whitelist: true })) body: CreateUserInput,
    @Response() res: NextApiResponse,
  ) {
    const { username } = body;
    const user = await createUser({ username });
    setTokenCookies(res, user.access_token);
    return { access_token: user.access_token, username: user.username };
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
