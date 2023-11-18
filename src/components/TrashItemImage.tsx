import Image, { StaticImageData } from "next/image";

import black1 from "@/assets/black1.png";
import black2 from "@/assets/black2.png";
import black3 from "@/assets/black3.png";
import blue1 from "@/assets/blue1.png";
import blue2 from "@/assets/blue2.png";
import blue3 from "@/assets/blue3.png";
import blue4 from "@/assets/blue3.png";
import brown1 from "@/assets/brown1.png";
import brown2 from "@/assets/brown2.png";
import green1 from "@/assets/green1.png";
import green2 from "@/assets/green2.png";
import green3 from "@/assets/green3.png";
import placeholderImage from "@/assets/placeholder64x64.png";
import yellow1 from "@/assets/yellow1.png";
import yellow2 from "@/assets/yellow2.png";
import yellow3 from "@/assets/yellow3.png";
import yellow4 from "@/assets/yellow4.png";
import yellow5 from "@/assets/yellow5.png";
import yellow6 from "@/assets/yellow6.png";
import { ITrashItemBase } from "@/types";

export interface ITrashItemImage {
  id: string;
  label: string;
}

export default function TrashItemImage(props: ITrashItemImage) {
  const { id, label } = props;
  const imageSrc = imageMapping[id] ?? placeholderImage;
  return (
    <div>
      <Image src={imageSrc} width={100} alt={id} />
      <span className="text-white">{label}</span>
    </div>
  );
}

export const trashItems: ITrashItemBase[] = [
  {
    image: "black1",
    type: "black",
    label: "rezidual",
  },
  {
    image: "black2",
    type: "black",
    label: "organic",
  },
  {
    image: "black3",
    type: "black",
    label: "organic",
  },
  {
    image: "blue1",
    type: "blue",
    label: "hartie",
  },
  {
    image: "blue2",
    type: "blue",
    label: "hartie",
  },
  {
    image: "blue3",
    type: "blue",
    label: "hartie",
  },
  {
    image: "blue4",
    type: "blue",
    label: "hartie",
  },
  {
    image: "brown1",
    type: "brown",
    label: "organic",
  },
  {
    image: "brown2",
    type: "brown",
    label: "organic",
  },
  {
    image: "green1",
    type: "green",
    label: "sticla",
  },
  {
    image: "green2",
    type: "green",
    label: "sticla",
  },
  {
    image: "green3",
    type: "green",
    label: "sticla",
  },
  {
    image: "yellow1",
    type: "yellow",
    label: "plastic",
  },
  {
    image: "yellow2",
    type: "yellow",
    label: "plastic",
  },
  {
    image: "yellow3",
    type: "yellow",
    label: "plastic",
  },
  {
    image: "yellow4",
    type: "yellow",
    label: "plastic",
  },
  {
    image: "yellow5",
    type: "yellow",
    label: "plastic",
  },
  {
    image: "yellow6",
    type: "yellow",
    label: "plastic",
  },
];

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
