// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getUserByToken } from "@/adapters/firebase";
import { addUserscore, getGamePlayData } from "@/dsl/gameplay";

type HttpError = {
  error: string;
};

type EndgameResponse = {
  id: string;
};

type EndGameData = {
  score: number;
  username: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<EndgameResponse | EndGameData | null | HttpError>,
) {
  const token = getCookie(req.headers.cookie as string);
  if (!token) {
    res.status(401);
    //return;
  }
  const user = await getUserByToken(token);
  if (!user) {
    return res.status(401);
  }

  if (req.method == "POST") {
    if (!req.body) {
      return res.status(400).json({ error: `gameplay - body is required` });
    }

    const gameData = await addUserscore(user, req.body);
    return res.status(200).json({ id: gameData.id });
  }

  if (req.method == "GET") {
    if (req.query.id) {
      const gamePlay = await getGamePlayData(req.query.id.toString());
      return res.status(200).json(gamePlay);
    }
  }

  res.status(404).json({ error: `gameplay - Method not found` });
}
function getCookie(cookiename: string) {
  return cookiename?.toString().replace(/^[^=]+./, "");
}
