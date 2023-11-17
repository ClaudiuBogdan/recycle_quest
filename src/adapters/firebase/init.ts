// Import the functions you need from the SDKs you need
import admin from "firebase-admin";
import { config } from "@/config";

console.log("Firebase credentials: ", config.firebase.credential);
const firebaseCredential = JSON.parse(config.firebase.credential);
console.log({ firebaseCredential });
console.error("CREDENTIALS PRINTED");
const firebaseConfig = {
  credential: admin.credential.cert(firebaseCredential),
  databaseURL: config.firebase.databaseURL,
};

// Initialize Firebase
const firebaseApp = admin.apps[0] ?? admin.initializeApp(firebaseConfig);

export const database = admin.database(firebaseApp);
