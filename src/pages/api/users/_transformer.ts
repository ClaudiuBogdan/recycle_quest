import * as Sentry from "@sentry/nextjs";

export function transformOffensiveNickname(nickname: string) {
  const isValid = validate(nickname);
  if (!isValid) {
    const error = "Invalid nickname: " + nickname;
    console.error(error);
    Sentry.captureException(error);
  }
  return isValid ? nickname : "anonim";
}

function validate(nickname: string) {
  const offensiveWords = [
    "pula",
    "cur",
    "mata",
    "pizda",
    "fut",
    "muie",
    "cacat",
    "prost",
    "tarfa",
    "curva",
  ];
  // Convert to lowercase
  const lowerCaseNickname = nickname.toLowerCase();

  // Remove special characters and extra spaces
  const sanitizedNickname = lowerCaseNickname.replace(/[^a-zA-Z0-9]/g, "");

  // Check against each offensive word
  return !offensiveWords.some((offensiveWord) => {
    // Create a regular expression for each offensive word
    const regex = new RegExp(offensiveWord.split("").join("\\s*"), "i"); // The regex will match the word even if there are spaces between letters
    return regex.test(sanitizedNickname);
  });
}
