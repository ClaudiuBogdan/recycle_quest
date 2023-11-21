import { NextApiRequest, NextApiResponse } from "next";
import { NextFunction, createMiddlewareDecorator } from "next-api-decorators";
import { parseCookies } from "nookies";
import { getUserByToken } from "@/adapters/firebase";
import updateContext from "./_context";

const UserTokenGuard = createMiddlewareDecorator(
  async (req: NextApiRequest, res: NextApiResponse, next: NextFunction) => {
    const { token } = parseCookies({ req });

    if (!token) {
      return res.status(401).json({ errors: [`Invalid auth token`] });
    }

    const user = await getUserByToken(token);
    if (!user) {
      return res.status(401).json({ errors: [`Unauthorized user`] });
    }

    updateContext(req, { user });

    next();
  },
);

export { UserTokenGuard };
