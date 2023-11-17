interface ErrorProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorProps> = ({ message }) => {
  return <span>{message}</span>;
};

export default ErrorMessage;
