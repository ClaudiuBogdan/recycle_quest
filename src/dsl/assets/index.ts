import * as uuid from "uuid";
import { filterAssets, insertAsset } from "@/adapters/firebase";
import { Asset, AssetCreateRequest } from "./types";

export const createAsset = async (assetInput: AssetCreateRequest[]) => {
  const assetId = uuid.v4();

  const assets: Asset[] = [];

  assetInput.forEach((asset) => {
    const assetData = {
      ...asset,
      id: assetId,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    assets.push(assetData);
  });

  await insertAsset(assets);

  return assets;
};

export const getFilteredAssets = async (assetsNames: string[]) => {
  return await filterAssets(assetsNames);
};
