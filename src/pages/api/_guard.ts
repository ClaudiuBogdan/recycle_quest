import { NextApiRequest, NextApiResponse } from "next";
import {
  NextFunction,
  UnauthorizedException,
  createMiddlewareDecorator,
} from "next-api-decorators";
import { destroyCookie, parseCookies } from "nookies";
import { DbUserAdapter } from "@/adapters/firebase";
import UserService from "@/services/UserService";
import updateContext from "./_context";

const userAdapter = new DbUserAdapter();
const userService = new UserService(userAdapter);

const UserTokenGuard = createMiddlewareDecorator(
  async (req: NextApiRequest, res: NextApiResponse, next: NextFunction) => {
    const { token } = parseCookies({ req });

    if (!token) {
      return res.status(401).json({ errors: [`Invalid auth token`] });
    }

    const user = await userService.getUserByToken(token);
    if (!user) {
      destroyCookie({ res }, "token", {
        httpOnly: true, // Secure cookie, not accessible via JavaScript
        secure: process.env.NODE_ENV !== "development", // Use secure in production
        sameSite: "strict", // CSRF protection
        path: "/",
      });
      return next(new UnauthorizedException("Unauthorized user"));
    }

    updateContext(req, { user });

    next();
  },
);

export { UserTokenGuard };
