import { useEffect, useState } from "react";
import SubmitButton from "./SubmitButton";
import TextInput from "./TextInput";

interface LoginInputProps {
  onChange: (value: string) => void;
}

const LoginForm: React.FC<LoginInputProps> = ({ onChange }) => {
  const [value, setValue] = useState("");
  useEffect(() => {
    onChange(value);
  }, [onChange, value]);

  const handleSubmitClick = () => {
    console.log("Submit click");
  };

  const placeholder = "Insert nickname";
  const submitText = "Enter";

  return (
    <>
      <TextInput value={value} placeholder={placeholder} onChange={setValue} />
      <SubmitButton label={submitText} onClick={handleSubmitClick} />
    </>
  );
};

export default LoginForm;
