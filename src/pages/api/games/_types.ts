import { Type } from "class-transformer";
import { IsArray, IsEnum, IsNotEmpty, ValidateNested } from "class-validator";
import type { TTrashItemType } from "@/types";
import { TTrashItemTypeEnum } from "@/types";

// Use this data structure after migration
export class EndGameInput {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ItemsData)
  items!: ItemsData[];
}

class ItemsData {
  @IsNotEmpty()
  image!: string;

  @IsEnum(TTrashItemTypeEnum)
  type!: TTrashItemType;
}

/**
 * @deprecated
 */
export class OldEndGameInput {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => OldItemsData)
  result!: OldItemsData[];

  @IsNotEmpty()
  access_token!: string;
}

class OldItemsData {
  @IsNotEmpty()
  asset_name!: string;

  @IsEnum(TTrashItemTypeEnum)
  container!: TTrashItemType;
}
