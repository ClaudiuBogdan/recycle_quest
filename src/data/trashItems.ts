import { TrashItemData } from "@/models/TrashItem";

export const TrashItemPlasticZuzu: TrashItemData = Object.freeze({
  imageId: "plastic_zuzu",
  type: "yellow",
  label: "PET",
});

export const TrashItemPlasticNapolactLapte: TrashItemData = Object.freeze({
  imageId: "plastic_napolact_lapte",
  type: "yellow",
  label: "PET",
});

export const TrashItemPlasticNapolactSana: TrashItemData = Object.freeze({
  imageId: "plastic_napolact_sana",
  type: "yellow",
  label: "PET",
});

export const TrashItemPlasticPungaLDPE: TrashItemData = Object.freeze({
  imageId: "plastic_punga_ldpe",
  type: "yellow",
  label: "LDPE",
});

export const TrashItemPlasticPaharTransparent: TrashItemData = Object.freeze({
  imageId: "plastic_pahar_transparent",
  type: "yellow",
  label: "PET",
});

export const TrashItemMetalConservaTon: TrashItemData = Object.freeze({
  imageId: "metal_conserva_ton",
  type: "yellow",
  label: "FE",
});

export const TrashItemMetalConservaCirio: TrashItemData = Object.freeze({
  imageId: "metal_conserva_cirio",
  type: "yellow",
  label: "FE",
});

export const TrashItemMetalConservaPorumb: TrashItemData = Object.freeze({
  imageId: "metal_conserva_porumb",
  type: "yellow",
  label: "FE",
});

export const TrashItemMetalDozaCola: TrashItemData = Object.freeze({
  imageId: "metal_doza_cola",
  type: "yellow",
  label: "ALU",
});

export const TrashItemSticlaPahar: TrashItemData = Object.freeze({
  imageId: "sticla_pahar",
  type: "green",
  label: "sticla",
});

export const TrashItemSticlaBorcan: TrashItemData = Object.freeze({
  imageId: "sticla_borcan",
  type: "green",
  label: "sticla",
});

export const TrashItemSticlaCola: TrashItemData = Object.freeze({
  imageId: "sticla_cola",
  type: "green",
  label: "sticla",
});

export const TrashItemSticlaSticlaFumurie: TrashItemData = Object.freeze({
  imageId: "sticla_sticla_fumurie",
  type: "green",
  label: "sticla",
});

export const TrashItemHartieA4: TrashItemData = Object.freeze({
  imageId: "hartie_a4",
  type: "blue",
  label: "hartie",
});

export const TrashItemHartieCartonCutie: TrashItemData = Object.freeze({
  imageId: "hartie_carton_cutie",
  type: "blue",
  label: "carton",
});

export const TrashItemHartieCartonOua: TrashItemData = Object.freeze({
  imageId: "hartie_carton_oua",
  type: "blue",
  label: "carton",
});

export const TrashItemHartieCartonPizzaClean: TrashItemData = Object.freeze({
  imageId: "hartie_carton_pizza_clean",
  type: "blue",
  label: "carton",
});

export const TrashItemHartiePunga: TrashItemData = Object.freeze({
  imageId: "hartie_punga",
  type: "blue",
  label: "hartie",
});

export const TrashItemHartieReviste: TrashItemData = Object.freeze({
  imageId: "hartie_reviste",
  type: "blue",
  label: "hartie",
});

export const TrashItemOrganicBranch: TrashItemData = Object.freeze({
  imageId: "organic_branch",
  type: "brown",
  label: "crengi",
});

export const TrashItemOrganicBread: TrashItemData = Object.freeze({
  imageId: "organic_bread",
  type: "brown",
  label: "paine",
});

export const TrashItemOrganicEggShell: TrashItemData = Object.freeze({
  imageId: "organic_egg_shell",
  type: "brown",
  label: "coji ouă",
});

export const TrashItemOrganicFlowers: TrashItemData = Object.freeze({
  imageId: "organic_flowers",
  type: "brown",
  label: "flori",
});

export const TrashItemOrganicFruitsVegetables: TrashItemData = Object.freeze({
  imageId: "organic_fructe_legume",
  type: "brown",
  label: "fructe și legume",
});

export const TrashItemRezidualUsedNapkin: TrashItemData = Object.freeze({
  imageId: "rezidual_used_napkin",
  type: "black",
  label: "șervețele folosite",
});

export const TrashItemRezidualUsedDiaper: TrashItemData = Object.freeze({
  imageId: "rezidual_diaper",
  type: "black",
  label: "scutece",
});

export const TrashItemRezidualCheese: TrashItemData = Object.freeze({
  imageId: "rezidual_cheese",
  type: "black",
  label: "lactate",
});

export const TrashItemRezidualDirtyPizzaBox: TrashItemData = Object.freeze({
  imageId: "rezidual_dirty_pizza_box",
  type: "black",
  label: "cutie cu ulei",
});

export const TrashItemRezidualEggs: TrashItemData = Object.freeze({
  imageId: "rezidual_eggs",
  type: "black",
  label: "ouă",
});

export const TrashItemRezidualFishBones: TrashItemData = Object.freeze({
  imageId: "rezidual_fish_bones",
  type: "black",
  label: "oase",
});

export const TrashItemRezidualMug: TrashItemData = Object.freeze({
  imageId: "rezidual_mug",
  type: "black",
  label: "cana",
});

const blackTrashItems: TrashItemData[] = [
  TrashItemRezidualUsedNapkin,
  TrashItemRezidualUsedDiaper,
  TrashItemRezidualCheese,
  TrashItemRezidualDirtyPizzaBox,
  TrashItemRezidualEggs,
  TrashItemRezidualFishBones,
  TrashItemRezidualMug,
];

const blueTrashItems: TrashItemData[] = [
  TrashItemHartieA4,
  TrashItemHartieCartonCutie,
  TrashItemHartieCartonOua,
  TrashItemHartieCartonPizzaClean,
  TrashItemHartiePunga,
  TrashItemHartieReviste,
];

const brownTrashItems: TrashItemData[] = [
  TrashItemOrganicBranch,
  TrashItemOrganicBread,
  TrashItemOrganicEggShell,
  TrashItemOrganicFlowers,
  TrashItemOrganicFruitsVegetables,
];

const greenTrashItems: TrashItemData[] = [
  TrashItemSticlaSticlaFumurie,
  TrashItemSticlaCola,
  TrashItemSticlaBorcan,
  TrashItemSticlaPahar,
];

const yellowTrashItems: TrashItemData[] = [
  TrashItemPlasticPaharTransparent,
  TrashItemPlasticZuzu,
  TrashItemPlasticNapolactLapte,
  TrashItemPlasticNapolactSana,
  TrashItemPlasticPungaLDPE,
  TrashItemMetalConservaTon,
  TrashItemMetalConservaCirio,
  TrashItemMetalConservaPorumb,
  TrashItemMetalDozaCola,
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
