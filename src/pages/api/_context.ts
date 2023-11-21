import { NextApiRequest } from "next";
import { RequestContext } from "@/next";

export default function createContext(
  req: NextApiRequest,
  args: Partial<RequestContext>,
): RequestContext {
  req.ctx = {
    ...req.ctx,
    ...args,
  };
  return req.ctx;
}
