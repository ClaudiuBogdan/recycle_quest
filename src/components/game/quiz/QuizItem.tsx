import SubmitButton from "@/components/SubmitButton";
import { AnswerState } from "./types";

type QuizItemProps = {
  header?: string;
  title: string;
  question: string;
  options: Array<{ id: string; text: string; correct: boolean }>;
  answerState?: AnswerState;
  onAnswer: (answerId: string, isCorrect: boolean) => void;
};

const QuizItem: React.FC<QuizItemProps> = ({
  title,
  header,
  question,
  options,
  answerState,
  onAnswer,
}) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center p-4 overflow-auto">
      <div
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDesc"
        className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full min-w-0 sm:min-w-[300px] mx-auto text-center"
      >
        {header && <header className="font-bold text-xl mb-4">{header}</header>}

        <h2 id="modalTitle" className="text-xl font-bold mb-4">
          {title}
        </h2>
        <p id="modalDesc" className="mb-6">
          {question}
        </p>

        <div className="space-y-4">
          {options.map((option) => (
            <SubmitButton
              key={option.id}
              disabled={!!answerState}
              className={`my-2 ${getAnswerColor(option.id, answerState)}`}
              onClick={() => onAnswer(option.id, option.correct)}
              label={option.text}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

function getAnswerColor(
  answerId: string,
  answerState?: AnswerState,
): string | undefined {
  if (!answerState) {
    return;
  }
  if (answerId === answerState.correctAnswerId) {
    return "bg-green-500 hover:bg-green-500 disabled:bg-green-500";
  }
  if (answerId === answerState.wrongAnswerId) {
    return "bg-red-500 hover:bg-red-500 disabled:bg-red-500";
  }
}

export default QuizItem;
