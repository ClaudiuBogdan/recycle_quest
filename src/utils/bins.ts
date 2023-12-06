import { StaticImageData } from "next/image";
import black from "@/assets/bins/black_bin.png";
import blue from "@/assets/bins/blue_bin.png";
import brown from "@/assets/bins/brown_bin.png";
import green from "@/assets/bins/green_bin.png";
import yellow from "@/assets/bins/yellow_bin.png";
import placeholderImage from "@/assets/placeholder64x64.png";
import { RecycleBinType } from "@/models/Bin";

export function mapBinIdToImage(binId: RecycleBinType): StaticImageData {
  const imageMap: Record<RecycleBinType, StaticImageData> = {
    black,
    blue,
    brown,
    green,
    yellow,
    none: placeholderImage,
  };

  return imageMap[binId] ?? placeholderImage;
}

export function mapBinIdToLabel(binId: RecycleBinType): string {
  const labelMap: Record<RecycleBinType, string> = {
    black: "rezidual",
    blue: "hartie/carton",
    brown: "organic",
    green: "sticla",
    yellow: "plastic/metal",
    none: "",
  };

  return labelMap[binId] ?? "";
}
