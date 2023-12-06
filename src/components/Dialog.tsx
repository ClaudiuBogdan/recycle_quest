import SubmitButton from "@/components/SubmitButton";

type DialogProps = {
  title: string;
  question: string;
  options: Array<{ id: string; text: string }>;
  onAnswer: (answerId: string) => void;
};

// Duplicated from QuizItem
const Dialog: React.FC<DialogProps> = ({
  title,
  question,
  options,
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
              className={`my-2`}
              onClick={() => onAnswer(option.id)}
              label={option.text}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dialog;
