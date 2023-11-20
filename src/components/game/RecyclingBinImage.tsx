import Image, { StaticImageData } from "next/image";
import black from "@/assets/black_bin.png";
import blue from "@/assets/blue_bin.png";
import brown from "@/assets/brown_bin.png";
import green from "@/assets/green_bin.png";
import placeholderImage from "@/assets/placeholder64x64.png";
import yellow from "@/assets/yellow_bin.png";
import { RecycleBinType } from "./types";

type RecyclingBinImageProps = {
  type: RecycleBinType;
  label: string;
  width: number;
  height: number;
};

const RecyclingBinImage: React.FC<RecyclingBinImageProps> = ({
  type,
  label,
  width,
  height,
}) => {
  const imageSrc = imageMapping[type] ?? placeholderImage;
  return <Image src={imageSrc} width={width} height={height} alt={label} />;
};

const imageMapping: Record<RecycleBinType, StaticImageData> = {
  black,
  blue,
  brown,
  green,
  yellow,
};

export default RecyclingBinImage;
