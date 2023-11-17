import Image, { StaticImageData } from "next/image";

import black from "@/assets/black_bin.png";
import blue from "@/assets/blue_bin.png";
import brown from "@/assets/brown_bin.png";
import green from "@/assets/green_bin.png";
import yellow from "@/assets/yellow_bin.png";
import { TTrashItemType } from "@/types";

const bins: Record<string, StaticImageData> = {
  black,
  blue,
  brown,
  green,
  yellow,
};

export interface IBins {
  onBinClick: (bin: TTrashItemType) => void;
}

export default function Bins(props: IBins) {
  const { onBinClick } = props;

  return (
    <div className="flex">
      {Object.entries(bins).map(([key, bin]) => (
        <div
          className="w-1/4"
          key={key}
          onClick={() => onBinClick(key as TTrashItemType)}
        >
          <Image src={bin} alt="bin" />
        </div>
      ))}
    </div>
  );
}
