export function useQuiz(score: number) {
  return { active: score > 2 };
}
