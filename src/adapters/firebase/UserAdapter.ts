import admin from "firebase-admin";
import { UserData } from "@/models/User";
import { firebaseDb } from "./firebaseInit";
import { IUserAdapter } from "../../interfaces/IUserAdapter";

class FirebaseUserAdapter implements IUserAdapter {
  private db: admin.database.Database;
  private usersRef: admin.database.Reference;

  constructor() {
    this.db = firebaseDb;
    this.usersRef = this.db.ref("users");
  }

  async createUser(userData: UserData): Promise<UserData> {
    const newUserRef = this.usersRef.push();
    await newUserRef.set(userData);
    return { ...userData, id: newUserRef.key! };
  }

  async getUserById(userId: string): Promise<UserData | null> {
    const snapshot = await this.usersRef.child(userId).once("value");
    if (snapshot.exists()) {
      return snapshot.val() as UserData;
    } else {
      return null;
    }
  }

  async getUserByNickname(nickname: string): Promise<UserData | null> {
    // Realtime Database doesn't support direct querying like Firestore, so we need to manually filter
    const snapshot = await this.usersRef
      .orderByChild("nickname")
      .equalTo(nickname)
      .once("value");
    if (snapshot.exists()) {
      const userId = Object.keys(snapshot.val())[0]; // Assuming nickname is unique
      return snapshot.child(userId).val() as UserData;
    } else {
      return null;
    }
  }

  async getUserByToken(token: string): Promise<UserData | null> {
    // Similar to getUserByNickname, manually filter for the token
    const snapshot = await this.usersRef
      .orderByChild("token")
      .equalTo(token)
      .once("value");
    if (snapshot.exists()) {
      const userId = Object.keys(snapshot.val())[0]; // Assuming token is unique
      return snapshot.child(userId).val() as UserData;
    } else {
      return null;
    }
  }
}

export default FirebaseUserAdapter;
