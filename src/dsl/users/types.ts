export type User = {
  id: string;
  username: string;
  access_token: string;
  createdAt: string;
  highscore?: number;
};

export type UserRegisterRequest = {
  username: string;
};
