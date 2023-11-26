import { BinData } from "@/models/Bin";

export const GreenBin: BinData = Object.freeze({
  type: "green",
  label: "sticla",
});

export const YellowBin: BinData = Object.freeze({
  type: "yellow",
  label: "plastic/metal",
});

export const BlueBin: BinData = Object.freeze({
  type: "blue",
  label: "hartie/carton",
});

export const BrownBin: BinData = Object.freeze({
  type: "brown",
  label: "organic",
});

export const BlackBin: BinData = Object.freeze({
  type: "black",
  label: "rezidual",
});

export const trashBins: BinData[] = [
  GreenBin,
  YellowBin,
  BlueBin,
  BrownBin,
  BlackBin,
];
