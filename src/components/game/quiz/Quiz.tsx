import { useEffect, useRef, useState } from "react";
import { QuizItemEvent } from "@/models/Game";
import { QuizData } from "@/models/Quiz";
import QuizItem from "./QuizItem";
import { AnswerState } from "./types";
import { createQuizAnswerEvent } from "../hooks/useEvents";

type QuizProps = {
  questions: QuizData[];
  onAnswer: (event: QuizItemEvent) => void;
  onQuizFinish: (succeeded: boolean) => void;
};

const Quiz: React.FC<QuizProps> = ({ questions, onAnswer, onQuizFinish }) => {
  const [question, setQuestion] = useState<QuizData | undefined>(questions[0]);
  const [answerState, setAnswerState] = useState<AnswerState | undefined>();
  const lastQuestionIdxRef = useRef(questions.length > 0 ? 0 : -1);

  useEffect(() => {
    if (questions.length > 0 && lastQuestionIdxRef.current === -1) {
      setQuestion(questions[0]);
      lastQuestionIdxRef.current = 0;
    }
  }, [questions]);

  useEffect(() => {
    if (lastQuestionIdxRef.current === -1 || answerState === undefined) {
      return;
    }
    // Wait for the user to see the correct answer before moving to the next question
    const delay = 1300;
    const timeoutId = setTimeout(() => {
      const nextQuestion = questions[lastQuestionIdxRef.current];
      setQuestion(nextQuestion);
      setAnswerState(undefined);
      if (!nextQuestion) {
        lastQuestionIdxRef.current = -1;
        onQuizFinish(true);
      }
    }, delay);
    return () => clearTimeout(timeoutId);
  }, [questions, answerState, onQuizFinish]);

  const updateAnswerState = (answerId: string) => {
    const correctAnswer = question!.answers.find((answer) => answer.correct)!;
    const correctAnswerId =
      answerId === correctAnswer.id ? answerId : correctAnswer.id;
    const wrongAnswerId = answerId === correctAnswer.id ? undefined : answerId;
    setAnswerState({ correctAnswerId, wrongAnswerId });
  };

  const handleAnswerClick = (answerId: string, isCorrect: boolean) => {
    if (!question || answerState) {
      return;
    }
    const event = createQuizAnswerEvent(question.id, answerId, isCorrect);
    lastQuestionIdxRef.current++;
    onAnswer(event);
    updateAnswerState(answerId);
    if (!isCorrect) {
      onQuizFinish(false);
    }
  };

  return (
    <>
      {question && (
        <QuizItem
          key={question.id}
          title={question.title}
          question={question.question}
          options={question.answers}
          answerState={answerState}
          onAnswer={handleAnswerClick}
        />
      )}
    </>
  );
};

export default Quiz;
