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

  game: {
    DIFFICULTY_INCREASE: 0.05,
    WAVE_ITEMS_NUMBER: 10,
    WAVE_ITEMS_SPREAD: 0.2,
  },
};
