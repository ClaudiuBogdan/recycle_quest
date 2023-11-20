interface ScoreProps {
  count: number;
}

const Score: React.FC<ScoreProps> = ({ count }) => {
  return (
    <div
      className="absolute top-0 left-5 text-gray-800 font-extrabold shadow-lg p-5"
      style={{ fontSize: "1rem" }}
    >
      Score: {count}
    </div>
  );
};

export default Score;
