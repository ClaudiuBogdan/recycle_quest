// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { NextApiRequest } from "next";
import { UserData } from "@/models/User";

declare module "next" {
  interface NextApiRequest {
    ctx?: RequestContext;
  }
}

declare type RequestContext = {
  user?: UserData;
};
