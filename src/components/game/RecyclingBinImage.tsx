import Image, { StaticImageData } from "next/image";
import black from "@/assets/bins/black_bin.png";
import blue from "@/assets/bins/blue_bin.png";
import brown from "@/assets/bins/brown_bin.png";
import green from "@/assets/bins/green_bin.png";
import yellow from "@/assets/bins/yellow_bin.png";
import placeholderImage from "@/assets/placeholder64x64.png";
import { RecycleBinType } from "@/models/Bin";

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
  return (
    <Image
      src={imageSrc}
      width={width}
      height={height}
      alt={label}
      priority={true}
    />
  );
};

const imageMapping: Record<RecycleBinType, StaticImageData> = {
  black,
  blue,
  brown,
  green,
  yellow,
  none: placeholderImage,
};

export default RecyclingBinImage;
