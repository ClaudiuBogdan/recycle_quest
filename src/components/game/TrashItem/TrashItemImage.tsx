import Image, { StaticImageData } from "next/image";

import placeholderImage from "@/assets/placeholder64x64.png";
import rezidual_cheese from "@/assets/trashItems/black/rezidual_cheese.png";
import rezidual_diaper from "@/assets/trashItems/black/rezidual_diaper.png";
import rezidual_dirty_pizza_box from "@/assets/trashItems/black/rezidual_dirty_pizza_box.png";
import rezidual_eggs from "@/assets/trashItems/black/rezidual_eggs.png";
import rezidual_fish_bones from "@/assets/trashItems/black/rezidual_fish_bones.png";
import rezidual_mug from "@/assets/trashItems/black/rezidual_mug.png";
import rezidual_used_napkin from "@/assets/trashItems/black/rezidual_used_napkin.png";
import hartie_a4 from "@/assets/trashItems/blue/hartie_a4.png";
import hartie_carton_cutie from "@/assets/trashItems/blue/hartie_carton_cutie.png";
import hartie_carton_oua from "@/assets/trashItems/blue/hartie_carton_oua.png";
import hartie_carton_pizza_clean from "@/assets/trashItems/blue/hartie_carton_pizza_clean.png";
import hartie_punga from "@/assets/trashItems/blue/hartie_punga.png";
import hartie_reviste from "@/assets/trashItems/blue/hartie_reviste.png";
import organic_branch from "@/assets/trashItems/brown/organic_branch.png";
import organic_bread from "@/assets/trashItems/brown/organic_bread.png";
import organic_egg_shell from "@/assets/trashItems/brown/organic_egg_shell.png";
import organic_flowers from "@/assets/trashItems/brown/organic_flowers.png";
import organic_fructe_legume from "@/assets/trashItems/brown/organic_fructe_legume.png";
import sticla_borcan from "@/assets/trashItems/green/sticla_borcan.png";
import sticla_cola from "@/assets/trashItems/green/sticla_cola.png";
import sticla_pahar from "@/assets/trashItems/green/sticla_pahar.png";
import sticla_sticla_fumurie from "@/assets/trashItems/green/sticla_sticla_fumurie.png";
import metal_conserva_cirio from "@/assets/trashItems/yellow/metal_conserva_cirio.png";
import metal_conserva_porumb from "@/assets/trashItems/yellow/metal_conserva_porumb.png";
import metal_conserva_ton from "@/assets/trashItems/yellow/metal_conserva_ton.png";
import metal_doza_cola from "@/assets/trashItems/yellow/metal_doza_cola.png";
import plastic_napolact_lapte from "@/assets/trashItems/yellow/plastic_napolact_lapte.png";
import plastic_napolact_sana from "@/assets/trashItems/yellow/plastic_napolact_sana.png";
import plastic_pahar_transparent from "@/assets/trashItems/yellow/plastic_pahar_transparent.png";
import plastic_punga_ldpe from "@/assets/trashItems/yellow/plastic_punga_ldpe.png";
import plastic_zuzu from "@/assets/trashItems/yellow/plastic_zuzu.png";
export interface TrashItemImageProps {
  imageId: string;
  label: string;
  width: number;
  height: number;
}

const TrashItemImage: React.FC<TrashItemImageProps> = ({
  imageId,
  label,
  width,
  height,
}) => {
  const imageSrc = imageMapping[imageId] ?? placeholderImage;
  return (
    <Image
      src={imageSrc}
      width={width}
      height={height}
      alt={label}
      priority={true}
    />
  );
};

const imageMapping: Record<string, StaticImageData> = {
  plastic_zuzu,
  plastic_napolact_lapte,
  plastic_napolact_sana,
  plastic_punga_ldpe,
  plastic_pahar_transparent,
  metal_conserva_porumb,
  metal_conserva_ton,
  metal_conserva_cirio,
  metal_doza_cola,
  sticla_pahar,
  sticla_borcan,
  sticla_cola,
  sticla_sticla_fumurie,
  hartie_a4,
  hartie_carton_cutie,
  hartie_carton_oua,
  hartie_carton_pizza_clean,
  hartie_punga,
  hartie_reviste,
  organic_branch,
  organic_bread,
  organic_egg_shell,
  organic_flowers,
  organic_fructe_legume,
  rezidual_cheese,
  rezidual_diaper,
  rezidual_dirty_pizza_box,
  rezidual_eggs,
  rezidual_fish_bones,
  rezidual_mug,
  rezidual_used_napkin,
};

export default TrashItemImage;
