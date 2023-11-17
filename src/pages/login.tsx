import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import LoginForm from "@/components/LoginForm";

const inter = Inter({ subsets: ["latin"] });

export default function Login() {
  const router = useRouter();

  const handleRegisterSuccess = async () => {
    await router.push("./home");
  };

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      Login page
      <LoginForm onSuccess={handleRegisterSuccess} />
    </main>
  );
}
