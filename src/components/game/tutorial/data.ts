import {
  BlackBin,
  BlueBin,
  BrownBin,
  GreenBin,
  YellowBin,
  trashBins,
} from "@/data/trashBins";
import {
  blackTrashItems,
  blueTrashItems,
  brownTrashItems,
  greenTrashItems,
  trashItems,
  yellowTrashItems,
} from "@/data/trashItems";
export const levels = [
  {
    id: "yellow-bins",
    bins: [YellowBin],
    scoreThreshold: 4,
    trashItems: yellowTrashItems,
    info: {
      title: "Container galben",
      message:
        "Utilizează containerul galben pentru reciclarea plasticului și metalului. Include articole precum sticle de plastic, conserve și ambalaje metalice.",
      buttonText: "Let's play",
    },
  },
  {
    id: "blue-bins",
    bins: [BlueBin],
    scoreThreshold: 4,
    info: {
      title: "Container albastru",
      message:
        "Containerul albastru este destinat hârtiei și cartonului. Aici poți arunca ziare, reviste, cutii de carton și alte produse din hârtie.",
      buttonText: "Let's play",
    },
    trashItems: blueTrashItems,
  },
  {
    id: "green-bins",
    bins: [GreenBin],
    scoreThreshold: 4,
    info: {
      title: "Container verde",
      message:
        "Folosește containerul verde pentru sticlă. Acesta este locul potrivit pentru sticle de băuturi, borcane de sticlă și alte tipuri de ambalaje din sticlă.",
      buttonText: "Let's play",
    },
    trashItems: greenTrashItems,
  },
  {
    id: "brown-bins",
    bins: [BrownBin],
    scoreThreshold: 4,
    info: {
      title: "Container maron",
      message:
        "Containerul maron este pentru deșeuri organice. Aici poți depune resturi de mâncare, coji de fructe și legume, și alte materiale biodegradabile.",
      buttonText: "Let's play",
    },
    trashItems: brownTrashItems,
  },
  {
    id: "black-bins",
    bins: [BlackBin],
    scoreThreshold: 4,
    info: {
      title: "Container negru",
      message:
        "Utilizează containerul negru pentru deșeurile menajere care nu se încadrează în celelalte categorii. Acesta este destinat pentru deșeurile generale care nu sunt reciclabile.",
      buttonText: "Let's play",
    },
    trashItems: blackTrashItems,
  },
  {
    id: "all-bins",
    bins: trashBins,
    scoreThreshold: 20,
    info: {
      title: "Toate recipientele",
      message:
        "În acest nivel, vei folosi toate recipientele de reciclare. Amintește-ți: containerul galben pentru plastic și metal, albastru pentru hârtie și carton, verde pentru sticlă, maron pentru deșeuri organice, și negru pentru alte deșeuri menajere. Selectează recipientul corect pentru fiecare tip de deșeu pentru a maximiza punctajul tău!",
      buttonText: "Let's play",
    },
    trashItems: trashItems,
  },
];
