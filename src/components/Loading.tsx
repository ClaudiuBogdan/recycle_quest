interface LoadingProps {
  text: string;
}

const Loading: React.FC<LoadingProps> = ({ text }) => {
  return <span>{text}</span>;
};

export default Loading;
