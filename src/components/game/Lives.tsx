interface LivesProps {
  count: number;
}

const Lives: React.FC<LivesProps> = ({ count }) => {
  return (
    <div
      className="absolute top-0 right-5 text-gray-800 font-extrabold shadow-lg p-5"
      style={{ fontSize: "1rem" }}
    >
      Lives: {count}
    </div>
  );
};

export default Lives;
