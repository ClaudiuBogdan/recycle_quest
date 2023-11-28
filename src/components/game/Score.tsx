interface ScoreProps {
  count: number;
}

const Score: React.FC<ScoreProps> = ({ count }) => {
  return (
    <div
      className="absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-170%] bg-black text-white text-center font-extrabold shadow-lg rounded-lg p-5"
      style={{ fontSize: "min(4vw, 2vh)", width: "min(30vw, 20vh)" }}
    >
      Score: {count}
    </div>
  );
};

export default Score;
