type ErrorMessageProps = {
  message: string;
};

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  if (!message) return null;

  return (
    <div
      className="px-4 py-3 leading-normal text-red-700 bg-red-100 rounded-lg"
      role="alert"
    >
      <span className="font-semibold">Error:</span> {message}
    </div>
  );
};

export default ErrorMessage;
