// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from "next";
import { filterAssets } from "@/adapters/firebase";
import { createAsset } from "@/dsl/assets";
import { Asset } from "@/dsl/assets/types";

type UserReqisterResponse = {
  username: string;
  access_token: string;
};

type HttpError = {
  error: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<UserReqisterResponse | Asset | Asset[] | HttpError>,
) {
  if (req.method == "POST") {
    if (!req.body) {
      return res.status(400).json({ error: "Invalid body" });
    }

    const asset = await createAsset(req.body);

    return res.status(200).json(asset);
  } else if (req.method == "GET") {
    const assets = req.body as string[];

    const filteredAssets = await filterAssets(assets);

    return res.status(200).json(filteredAssets);
  }

  return res.status(400).json({ error: `assets - Method not found` });
}
