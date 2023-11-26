import { TrashItemData } from "@/models/TrashItem";

export const TrashItemBlack1: TrashItemData = Object.freeze({
  imageId: "black1",
  type: "black",
  label: "rezidual",
});

export const TrashItemBlack2: TrashItemData = Object.freeze({
  imageId: "black2",
  type: "black",
  label: "rezidual",
});

export const TrashItemBlack3: TrashItemData = Object.freeze({
  imageId: "black3",
  type: "black",
  label: "rezidual",
});

export const TrashItemBlue1: TrashItemData = Object.freeze({
  imageId: "blue1",
  type: "blue",
  label: "hartie",
});

export const TrashItemBlue2: TrashItemData = Object.freeze({
  imageId: "blue2",
  type: "blue",
  label: "hartie",
});

export const TrashItemBlue3: TrashItemData = Object.freeze({
  imageId: "blue3",
  type: "blue",
  label: "hartie",
});

export const TrashItemBlue4: TrashItemData = Object.freeze({
  imageId: "blue4",
  type: "blue",
  label: "hartie",
});

export const TrashItemBrown1: TrashItemData = Object.freeze({
  imageId: "brown1",
  type: "brown",
  label: "organic",
});

export const TrashItemBrown2: TrashItemData = Object.freeze({
  imageId: "brown2",
  type: "brown",
  label: "organic",
});

export const TrashItemGreen1: TrashItemData = Object.freeze({
  imageId: "green1",
  type: "green",
  label: "sticla",
});

export const TrashItemGreen2: TrashItemData = Object.freeze({
  imageId: "green2",
  type: "green",
  label: "sticla",
});

export const TrashItemGreen3: TrashItemData = Object.freeze({
  imageId: "green3",
  type: "green",
  label: "sticla",
});

export const TrashItemYellow1: TrashItemData = Object.freeze({
  imageId: "yellow1",
  type: "yellow",
  label: "metal",
});

export const TrashItemYellow2: TrashItemData = Object.freeze({
  imageId: "yellow2",
  type: "yellow",
  label: "metal",
});

export const TrashItemYellow3: TrashItemData = Object.freeze({
  imageId: "yellow3",
  type: "yellow",
  label: "metal",
});

export const TrashItemYellow4: TrashItemData = Object.freeze({
  imageId: "yellow4",
  type: "yellow",
  label: "plastic",
});

export const TrashItemYellow5: TrashItemData = Object.freeze({
  imageId: "yellow5",
  type: "yellow",
  label: "plastic",
});

export const TrashItemYellow6: TrashItemData = Object.freeze({
  imageId: "yellow6",
  type: "yellow",
  label: "plastic",
});

const blackTrashItems: TrashItemData[] = [
  TrashItemBlack1,
  TrashItemBlack2,
  TrashItemBlack3,
];

const blueTrashItems: TrashItemData[] = [
  TrashItemBlue1,
  TrashItemBlue2,
  TrashItemBlue3,
  TrashItemBlue4,
];

const brownTrashItems: TrashItemData[] = [TrashItemBrown1, TrashItemBrown2];

const greenTrashItems: TrashItemData[] = [
  TrashItemGreen1,
  TrashItemGreen2,
  TrashItemGreen3,
];

const yellowTrashItems: TrashItemData[] = [
  TrashItemYellow1,
  TrashItemYellow2,
  TrashItemYellow3,
  TrashItemYellow4,
  TrashItemYellow5,
  TrashItemYellow6,
];

export const trashItems: TrashItemData[] = [
  ...blackTrashItems,
  ...blueTrashItems,
  ...brownTrashItems,
  ...greenTrashItems,
  ...yellowTrashItems,
];

export {
  blackTrashItems,
  blueTrashItems,
  brownTrashItems,
  greenTrashItems,
  yellowTrashItems,
};
