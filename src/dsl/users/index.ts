import * as uuid from "uuid";
import { getAll, insertUser } from "@/adapters/firebase";
import { UserRegisterRequest } from "./types";

export const createUser = async (userInput: UserRegisterRequest) => {
  const userId = uuid.v4();

  const userData = {
    ...userInput,
    id: userId,
    highscore: 0,
    access_token: uuid.v4(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  await insertUser(userData);

  return userData;
};

export const getAllUsers = async () => {
  const users = await getAll();

  return users;
};
