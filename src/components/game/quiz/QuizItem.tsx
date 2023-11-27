import SubmitButton from "@/components/SubmitButton";

type QuizItemProps = {
  title: string;
  question: string;
  options: Array<{ id: string; text: string }>;
  onAnswer: (answerId: string) => void;
};

const QuizItem: React.FC<QuizItemProps> = ({
  title,
  question,
  options,
  onAnswer,
}) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg shadow-lg max-w-md text-center">
        <h2 className="text-lg font-bold mb-3">{title}</h2>
        <p>{question}</p>
        {options.map((option) => (
          <SubmitButton
            key={option.id}
            onClick={() => onAnswer(option.id)}
            label={option.text}
          />
        ))}
      </div>
    </div>
  );
};

export default QuizItem;
