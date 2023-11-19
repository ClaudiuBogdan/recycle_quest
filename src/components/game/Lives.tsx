interface LivesProps {
  count: number;
}

const Lives: React.FC<LivesProps> = ({ count }) => {
  return <div className="absolute top-0 right-10">Lives: {count}</div>;
};

export default Lives;
