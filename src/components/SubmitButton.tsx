interface SubmitButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
  label,
  onClick,
  disabled = false,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-full px-6 py-2 mt-4 bg-yellow-500
       text-white font-bold rounded-lg shadow-lg
       hover:bg-yellow-600 transition duration-300 ${
         disabled ? "opacity-50 cursor-not-allowed" : ""
       } ${className ? className : ""}`}
    >
      {label}
    </button>
  );
};

export default SubmitButton;
