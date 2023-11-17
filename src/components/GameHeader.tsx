export interface IGameHeader {
  score: number;
  lifes: number;
}

export default function GameHeader(props: IGameHeader) {
  const { score, lifes } = props;
  return (
    <div className="w-full flex justify-between" style={{ height: "64px" }}>
      <div className="text-3xl text-gray-900">Lifes: {lifes}</div>
      <div className="text-3xl text-gray-900 ">Score: {score}</div>
    </div>
  );
}
