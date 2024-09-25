import type { NextApiResponse } from "next/types";
import { Catch, Get, Response, createHandler } from "next-api-decorators";
import { destroyCookie } from "nookies";
import { logExceptionHandler } from "@/adapters/sentry";

@Catch(logExceptionHandler)
class LogoutHandler {
  @Get()
  async logout(@Response() res: NextApiResponse) {
    removeTokenCookies(res);
    res.redirect(302, "/login");
  }
}

function removeTokenCookies(res: NextApiResponse) {
  destroyCookie({ res }, "token", {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    maxAge: 0,
    sameSite: "strict", // CSRF protection
    path: "/",
  });
}

export default createHandler(LogoutHandler);
