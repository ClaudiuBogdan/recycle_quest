import Dialog from "../Dialog";

type EndGameDialogProps = {
  onEndGame: () => void;
  onStartQuiz: () => void;
};

// Duplicated from QuizItem
const EndGameDialog: React.FC<EndGameDialogProps> = ({
  onEndGame,
  onStartQuiz,
}) => {
  const handleAnswer = (answerId: string) => {
    if (answerId === "start-quiz") {
      onStartQuiz();
    } else if (answerId === "end-game") {
      onEndGame();
    }
  };

  return (
    <Dialog
      title="Câștigă o viață extra"
      question="Poți câștiga o viață extra dacă reușești să răspunzi corect la întrebările despre reciclare"
      options={[
        { id: "start-quiz", text: "Răspunde la întrebări" },
        { id: "end-game", text: "Termină jocul" },
      ]}
      onAnswer={handleAnswer}
    />
  );
};

export default EndGameDialog;
