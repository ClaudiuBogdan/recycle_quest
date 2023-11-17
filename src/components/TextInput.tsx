interface TextInputProps {
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
}

const TextInput: React.FC<TextInputProps> = ({
  value,
  placeholder,
  onChange,
}) => {
  return (
    <input
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500 transition-color"
    />
  );
};

export default TextInput;
