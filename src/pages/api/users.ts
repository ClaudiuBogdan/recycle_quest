// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from "next";
import { setCookie } from "nookies";
import { getUserbyUsername } from "@/adapters/firebase";
import { createUser, getAllUsers } from "@/dsl/users";
import { User } from "@/dsl/users/types";

type UserReqisterResponse = {
  username: string;
  access_token: string;
};

type HttpError = {
  error: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<UserReqisterResponse | User | User[] | HttpError>,
) {
  if (req.method == "POST") {
    if (!req.body) {
      return res.status(400).json({ error: "Invalid body" });
    }

    const usernameInput = req.body.username as string;

    if (!usernameInput || usernameInput.length < 4) {
      return res.status(400).json({ error: "Username is not valid" });
    }

    const existingUser = await getUserbyUsername(usernameInput);
    if (existingUser) {
      return res.status(400).json({ error: "Username already taken" });
    }

    const user = await createUser({ username: usernameInput });

    // Set the token in a cookie using
    setCookie({ res }, "token", user.access_token, {
      httpOnly: true, // Secure cookie, not accessible via JavaScript
      secure: process.env.NODE_ENV !== "development", // Use secure in production
      maxAge: 60 * 60 * 24 * 7 * 4, // 4 week
      sameSite: "strict", // CSRF protection
      path: "/",
    });

    return res
      .status(200)
      .json({ access_token: user.access_token, username: user.username });
  }

  if (req.method == "GET") {
    const users = await getAllUsers();
    res.status(200).json(users);
    return;
  }

  return res.status(400).json({ error: "Method not found" });
}
