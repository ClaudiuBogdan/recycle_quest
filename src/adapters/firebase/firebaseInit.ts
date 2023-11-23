import admin from "firebase-admin";

import { config } from "@/config";

const firebaseCredential = JSON.parse(config.firebase.credential);

const firebaseConfig = {
  credential: admin.credential.cert(firebaseCredential),
  databaseURL: config.firebase.databaseURL,
};

// Initialize Firebase
const app = admin.apps[0] ?? admin.initializeApp(firebaseConfig);

// Initialize database
export const firebaseDb = admin.database(app);
