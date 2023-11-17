export type Asset = {
  id: string;
  name: string;
  description: string;
  container: ContainerColor;
  points: number;
};

export type AssetCreateRequest = {
  name: string;
  description: string;
  container: ContainerColor;
  points: number;
};

export enum ContainerColor {
  black = 10,
  blue = 20,
  yellow = 30,
  brown = 40,
  green = 50,
}
