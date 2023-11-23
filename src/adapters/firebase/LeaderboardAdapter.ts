import admin from "firebase-admin";
import { LeaderboardEntry } from "@/models/Leaderboard";
import { firebaseDb } from "./firebaseInit";
import { ILeaderboardAdapter } from "../../interfaces/ILeaderboardAdapter";

class FirebaseLeaderboardAdapter implements ILeaderboardAdapter {
  private db: admin.database.Database;
  private leaderboardRef: admin.database.Reference;

  constructor() {
    this.db = firebaseDb;
    this.leaderboardRef = this.db.ref("leaderboard");
  }

  async getTopScores(limitCount: number): Promise<LeaderboardEntry[]> {
    const snapshot = await this.leaderboardRef
      .orderByChild("highScore")
      .limitToLast(limitCount)
      .once("value");

    const leaderboardEntries: LeaderboardEntry[] = [];
    snapshot.forEach((childSnapshot) => {
      const entry = childSnapshot.val() as LeaderboardEntry;
      leaderboardEntries.push({
        ...entry,
        lastUpdated: new Date(entry.lastUpdated),
      });
    });

    return leaderboardEntries.reverse(); // Reverse to get descending order
  }

  async getUserHighScore(userId: string): Promise<LeaderboardEntry | null> {
    const snapshot = await this.leaderboardRef.child(userId).once("value");
    if (snapshot.exists()) {
      const data = snapshot.val() as LeaderboardEntry;
      return {
        ...data,
        lastUpdated: new Date(data.lastUpdated),
      };
    } else {
      return null;
    }
  }

  async updateHighScore(entry: LeaderboardEntry): Promise<LeaderboardEntry> {
    await this.leaderboardRef.child(entry.userId).set(entry);
    return entry;
  }

  async getRankByUserId(userId: string): Promise<number> {
    const userSnapshot = await this.leaderboardRef.child(userId).once("value");
    if (!userSnapshot.exists()) {
      throw new Error("User not found in the leaderboard");
    }

    const userHighScore = userSnapshot.val().highScore;
    let rank = 1;

    // Iterate through all leaderboard entries to find the rank
    const allEntriesSnapshot = await this.leaderboardRef
      .orderByChild("highScore")
      .once("value");
    allEntriesSnapshot.forEach((entrySnapshot) => {
      if (entrySnapshot.val().highScore > userHighScore) {
        rank++;
      }
    });

    return rank;
  }
}

export default FirebaseLeaderboardAdapter;
