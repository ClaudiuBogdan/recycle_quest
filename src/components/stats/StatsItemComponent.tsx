import Image, { StaticImageData } from "next/image";
import React from "react";

interface StatsItemComponentProps {
  imageSrc: StaticImageData | string;
  count: number;
  label: string;
}

const StatsItemComponent: React.FC<StatsItemComponentProps> = ({
  imageSrc,
  count,
  label,
}) => {
  return (
    <div className="flex items-center space-x-2">
      <Image src={imageSrc} alt="Sorted Item" className="w-8 h-8" />{" "}
      <span className="text-lg font-semibold"> x </span>
      <span className="text-lg font-semibold">{count}</span>
      <span className="text-lg font-semibold">{label}</span>
    </div>
  );
};

export default StatsItemComponent;
