import * as uuid from "uuid";
import { filterAssets, insertAsset } from "@/adapters/firebase";
import { AssetCreateRequest } from "./types";

export const createAsset = async (assetInput: AssetCreateRequest) => {
  const assetId = uuid.v4();

  const userData = {
    ...assetInput,
    id: assetId,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  await insertAsset(userData);

  return userData;
};

export const getFilteredAssets = async (assetsNames: string[]) => {
  return await filterAssets(assetsNames);
};
