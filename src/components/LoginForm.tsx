import { useState } from "react";
import { useRegisterUser } from "@/adapters/api";
import ErrorMessage from "./ErrorMessage";
import Loading from "./Loading";
import SubmitButton from "./SubmitButton";
import TextInput from "./TextInput";

interface LoginInputProps {
  onSuccess: (username: string) => void;
}

const LoginForm: React.FC<LoginInputProps> = ({ onSuccess }) => {
  const [username, setUsername] = useState("");
  const { register, loading, error } = useRegisterUser();

  const handleSubmitClick = () => {
    register({ username })
      .then((res) => {
        if (!res) {
          throw new Error("Response is undefined");
        }
        onSuccess(username);
      })
      .catch((err) => console.error(err));
  };

  const placeholder = "Insert nickname";
  const submitText = "Enter";
  const loadingText = "Loading";

  return (
    <>
      <TextInput
        value={username}
        placeholder={placeholder}
        onChange={setUsername}
      />
      <SubmitButton
        label={submitText}
        disabled={loading}
        onClick={handleSubmitClick}
      />
      {loading && <Loading text={loadingText} />}
      {error && <ErrorMessage message={error} />}
    </>
  );
};

export default LoginForm;
