import { useEffect, useState } from "react";
import TextInput from "./TextInput";

interface LoginInputProps {
  onChange: (value: string) => void;
}

const LoginInput: React.FC<LoginInputProps> = ({ onChange }) => {
  const [value, setValue] = useState("");
  useEffect(() => {
    onChange(value);
  }, [onChange, value]);

  const placeholder = "Insert nickname";

  return (
    <TextInput value={value} placeholder={placeholder} onChange={setValue} />
  );
};

export default LoginInput;
