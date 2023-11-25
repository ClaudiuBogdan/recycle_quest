import { StaticImageData } from "next/image";
import React from "react";
import placeholderImage from "@/assets/placeholder64x64.png";
import { StatsItem } from "@/models/Game";
import { mapBinIdToImage, mapBinIdToLabel } from "@/utils/bins";
import StatsItemComponent from "./StatsItemComponent";

interface StatsItemsListComponentProps {
  statsItems: StatsItem[];
}

const StatsItemsListComponent: React.FC<StatsItemsListComponentProps> = ({
  statsItems,
}) => {
  // Filter out the correct items
  const correctItems = statsItems
    .filter(
      (item) => item.type === "bin_selection" || item.type === "quiz_answer",
    )
    .sort((a, b) =>
      a.type === "bin_selection" && b.type === "bin_selection"
        ? b.count - a.count
        : -1,
    );

  const getItemImage = (item: StatsItem): StaticImageData => {
    if (item.type === "bin_selection") {
      return mapBinIdToImage(item.binId);
    }
    return placeholderImage;
  };

  const getBinLabel = (item: StatsItem): string => {
    if (item.type === "bin_selection") {
      return mapBinIdToLabel(item.binId);
    }
    return "";
  };

  return (
    <div className="space-y-4">
      {correctItems.map((item, index) => (
        <StatsItemComponent
          key={index}
          imageSrc={getItemImage(item)}
          label={getBinLabel(item)}
          count={item.count}
        />
      ))}
    </div>
  );
};

export default StatsItemsListComponent;
