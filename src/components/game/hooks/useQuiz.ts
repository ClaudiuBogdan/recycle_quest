import { useCallback, useRef, useState } from "react";
import { quizQuestions } from "@/data/quizQuestions";
import { QuizData } from "@/models/Quiz";
import shuffleArray from "@/utils/shuffle";

const questionsCount = 3;

export function useQuiz() {
  const [questions, setQuestions] = useState<QuizData[]>([]);
  const initialQuestionsRef = useRef(shuffleArray(quizQuestions));
  const lastQuestionIdRef = useRef(0);
  const hasQuestions =
    lastQuestionIdRef.current + questionsCount <= quizQuestions.length;

  const generateQuestions = useCallback(() => {
    const newQuestions = initialQuestionsRef.current.slice(
      lastQuestionIdRef.current,
      lastQuestionIdRef.current + questionsCount,
    );
    lastQuestionIdRef.current += questionsCount;
    setQuestions(newQuestions);
  }, []);

  return { questions, hasQuestions, generateQuestions };
}
