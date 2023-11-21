// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { NextApiRequest } from "next";
import { User } from "@/dsl/users/types";

declare module "next" {
  interface NextApiRequest {
    ctx?: RequestContext;
  }
}

declare type RequestContext = {
  user?: User;
};
