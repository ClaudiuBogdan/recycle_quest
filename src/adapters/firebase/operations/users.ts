import { User } from "@/dsl/users/types";
import { database } from "../init";

const userRef = "users";

export const insertUser = async (userData: User) => {
  const { id } = userData;
  return database.ref(`${userRef}/${id}`).set(userData);
};

export const getUserByToken = async (userId: string) => {
  const snapshot = await database.ref(`${userRef}/${userId}`).once("value");
  if (snapshot.exists()) {
    return snapshot.val() as User;
  } else {
    return null;
  }
};

export const getAll = async (): Promise<User[]> => {
  const snapshot = await database.ref(`${userRef}`).get();
  if (snapshot) {
    return snapshot.val() as [];
  }
  return [];
};
