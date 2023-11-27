export interface QuizData {
  id: string;
  title: string;
  question: string;
  answers: Array<{
    id: string;
    text: string;
    correct: boolean;
  }>;
}
