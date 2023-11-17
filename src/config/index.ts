// https://nextjs.org/docs/basic-features/environment-variables

import { loadEnv } from "./utils";

export const config = {
  firebase: {
    credential: loadEnv("FIREBASE_CREDENTIAL"),
    databaseURL: loadEnv("FIREBASE_DATABASE_URL"),
  },

  app: {
    name: loadEnv("APP_NAME"),
    version: loadEnv("APP_VERSION"),
    baseUrl: loadEnv("APP_BASE_URL"),
  },
};
