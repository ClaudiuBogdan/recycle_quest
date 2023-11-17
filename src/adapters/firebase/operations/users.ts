import { User } from "@/dsl/users/types";
import { database } from "../init";

const userRef = "users";

export const insertUser = async (userData: User) => {
  const { id } = userData;
  return database.ref(`${userRef}/${id}`).set(userData);
};

export const getUserByToken = async (access_token: string) => {
  let user: User | null = null;
  const snapshot = await database.ref(`${userRef}`).once("value");
  if (snapshot.exists()) {
    snapshot.forEach((item) => {
      const token = item.val().access_token;

      if (token == access_token) user = item.val();
    });
  }
  return user;
};

export const getUserbyUsername = async (username: string) => {
  let user: string | null = null;
  await database
    .ref(`${userRef}`)
    .orderByKey()
    .on("value", (snap) => {
      if (snap.exists()) {
        snap.forEach((item) => {
          if (item.val().username == username) {
            user = item.val();
          }
        });
      }
    });

  return user;
};

export const getAll = async (): Promise<User[]> => {
  const users: User[] = [];
  const snapshot = await database.ref(`${userRef}`).get();
  if (snapshot.exists()) {
    snapshot.forEach((element) => {
      users.push(element.val());
    });
  }
  return users;
};

export const updateUser = async (user: User) => {
  const userRefHook = database.ref(`${userRef}`).child(`${user.id}`);
  console.debug("ref", userRefHook);
  await userRefHook.update({
    highscore: user.highscore,
  });
};
