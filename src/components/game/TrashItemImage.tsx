import Image, { StaticImageData } from "next/image";

import placeholderImage from "@/assets/placeholder64x64.png";
import black1 from "@/assets/trashItems/black/black1.png";
import black2 from "@/assets/trashItems/black/black2.png";
import black3 from "@/assets/trashItems/black/black3.png";
import blue1 from "@/assets/trashItems/blue/blue1.png";
import blue2 from "@/assets/trashItems/blue/blue2.png";
import blue4 from "@/assets/trashItems/blue/blue3.png";
import blue3 from "@/assets/trashItems/blue/blue3.png";
import brown1 from "@/assets/trashItems/brown/brown1.png";
import brown2 from "@/assets/trashItems/brown/brown2.png";
import green1 from "@/assets/trashItems/green/green1.png";
import green2 from "@/assets/trashItems/green/green2.png";
import green3 from "@/assets/trashItems/green/green3.png";
import yellow1 from "@/assets/trashItems/yellow/yellow1.png";
import yellow2 from "@/assets/trashItems/yellow/yellow2.png";
import yellow3 from "@/assets/trashItems/yellow/yellow3.png";
import yellow4 from "@/assets/trashItems/yellow/yellow4.png";
import yellow5 from "@/assets/trashItems/yellow/yellow5.png";
import yellow6 from "@/assets/trashItems/yellow/yellow6.png";

export interface TrashItemImageProps {
  imageId: string;
  label: string;
  width: number;
  height: number;
}

const TrashItemImage: React.FC<TrashItemImageProps> = ({
  imageId,
  label,
  width,
  height,
}) => {
  const imageSrc = imageMapping[imageId] ?? placeholderImage;
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

const imageMapping: Record<string, StaticImageData> = {
  black1,
  black2,
  black3,
  blue1,
  blue2,
  blue3,
  blue4,
  brown1,
  brown2,
  green1,
  green2,
  green3,
  yellow1,
  yellow2,
  yellow3,
  yellow4,
  yellow5,
  yellow6,
};

export default TrashItemImage;
