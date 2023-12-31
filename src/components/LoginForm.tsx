import { useState } from "react";
import { useRegisterUser } from "@/adapters/api";
import ErrorMessage from "./ErrorMessage";
import Loading from "./Loading";
import SubmitButton from "./SubmitButton";
import TextInput from "./TextInput";

interface LoginInputProps {
  onSuccess: (nickname: string) => void;
}

const LoginForm: React.FC<LoginInputProps> = ({ onSuccess }) => {
  const [nickname, setNickname] = useState("");
  const { register, loading, error } = useRegisterUser();

  const handleSubmitClick = () => {
    register({ nickname })
      .then((res) => {
        if (!res) {
          throw new Error("Response is undefined");
        }
        onSuccess(nickname);
      })
      .catch((err) => console.error(err));
  };

  const placeholder = "Insert nickname";
  const submitText = "Enter";
  const loadingText = "Loading";

  return (
    <div className={"space-y-4"}>
      <TextInput
        value={nickname}
        placeholder={placeholder}
        onChange={setNickname}
      />
      <SubmitButton
        label={submitText}
        disabled={loading}
        onClick={handleSubmitClick}
      />
      {loading && <Loading text={loadingText} />}
      {error && <ErrorMessage message={error.message} />}
    </div>
  );
};

export default LoginForm;
