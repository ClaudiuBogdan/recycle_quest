import { MutableRefObject, useMemo } from "react";

const usePosition = (divRef: MutableRefObject<HTMLElement | null>) => {
  const el = divRef.current;
  const position = useMemo(() => {
    if (el) {
      return getPosition(el);
    }
  }, [el]);

  if (!position) {
    return null;
  }
  return position;
};

const getPosition = (el: HTMLElement) => {
  const rect = el.getBoundingClientRect();
  return {
    bottom: rect.top + rect.height,
  };
};

export { getPosition };
export default usePosition;
