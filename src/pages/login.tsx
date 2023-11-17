import { Inter } from "next/font/google";
import { useCallback, useState } from "react";
import LoginForm from "@/components/LoginForm";

const inter = Inter({ subsets: ["latin"] });

export default function Login() {
  const [username, setUsername] = useState("");
  const handleOnChange = useCallback((newUsername: string) => {
    setUsername(newUsername);
  }, []);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      Login page
      <LoginForm onChange={handleOnChange} />
      {username}
    </main>
  );
}
