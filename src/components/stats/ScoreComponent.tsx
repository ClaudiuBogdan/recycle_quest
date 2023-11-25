const ScoreComponent: React.FC<{ score: number }> = ({ score }) => (
  <div className="text-2xl font-bold">Score: {score}</div>
);

export default ScoreComponent;
