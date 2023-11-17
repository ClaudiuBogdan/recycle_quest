import { Asset } from "@/dsl/assets/types";
import { database } from "../init";

const assetsRef = "assets";

export const filterAssets = async (assets: string[]) => {
  const filteredAssets: Asset[] = [];
  await database
    .ref(`${assetsRef}`)
    .orderByChild("name")
    .on("value", (snapshot) => {
      if (!snapshot.exists()) {
        return [];
      }
      snapshot.forEach((asset) => {
        const foundAsset = assets.find((x) => x == asset.val().name);
        if (foundAsset) {
          filteredAssets.push(asset.val());
        }
      });
    });

  return filteredAssets;
};

export const insertAsset = async (assetData: Asset[]) => {
  assetData.forEach(async (asset) => {
    await database.ref(`${assetsRef}/${asset.id}`).set(asset);
  });
};
