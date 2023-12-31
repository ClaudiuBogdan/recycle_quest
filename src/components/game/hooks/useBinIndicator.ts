import { useCallback, useEffect, useRef, useState } from "react";
import { RecycleBinType } from "@/models/Bin";
import { ITrashItemUI } from "../types";

export default function useBinIndicator(
  trashItems: ITrashItemUI[],
  displayIndicatorLimit: number,
) {
  const [binIndicator, setBinIndicator] = useState<RecycleBinType | undefined>(
    undefined,
  );
  const lastItemRef = useRef<ITrashItemUI | undefined>();
  const itemCountRef = useRef<number>(0);

  const updateBinIndicator = useCallback(() => {
    const item = trashItems[0];
    if (lastItemRef.current !== item) {
      lastItemRef.current = item;
      itemCountRef.current++;
    }
    if (itemCountRef.current < displayIndicatorLimit) {
      setBinIndicator(item?.type);
    } else if (itemCountRef.current === displayIndicatorLimit) {
      setBinIndicator(undefined);
    }
  }, [trashItems, displayIndicatorLimit]);

  useEffect(updateBinIndicator, [updateBinIndicator]);

  const resetIndicatorCount = useCallback(() => {
    itemCountRef.current = 1;
    updateBinIndicator();
  }, [updateBinIndicator]);

  return { binIndicator, resetIndicatorCount };
}
