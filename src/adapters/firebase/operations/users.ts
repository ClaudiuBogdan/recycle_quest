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

export const getUserbyUsername = async (username: string) => {
  let user: string | null = null;
  await database
    .ref(`${userRef}`)
    .orderByKey()
    .on("value", (snap) => {
      if (snap.exists()) {
        snap.forEach((item) => {
          console.log(item.val().username == "test22");
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
  await userRefHook.update({
    highscore: user.highscore,
  });
};

export const getLeaderBoard = async (): Promise<User[]> => {
  const snapshot = await database
    .ref(`${userRef}`)
    .orderByKey()
    .equalTo("highscore")
    .get();

  if (snapshot) {
    return snapshot.val() as [];
  }
  return [];
};
