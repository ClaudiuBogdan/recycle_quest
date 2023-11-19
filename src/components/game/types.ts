export type ITrashItem = ITrashItemBase & {
  id: number;
  initialPosition: number;
};

export type ITrashItemBase = {
  image: string;
  type: string;
  label: string;
};
