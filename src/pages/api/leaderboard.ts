// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from "next";
import { getAllUsers } from "@/dsl/users";
import { User } from "@/dsl/users/types";

type HttpError = {
  error: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User[] | HttpError>,
) {
  if (req.method == "GET") {
    const users = await getAllUsers();

    const firstTenUsers = users
      .sort((a, b) => {
        if (a.highscore && b.highscore) {
          return a.highscore - b.highscore;
        }
        return 0;
      })
      .slice(0, 10);

    res.status(200).json(firstTenUsers);
  }

  res.status(400).json({ error: "Method not found" });
}
