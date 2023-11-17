import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { parseCookies } from "nookies";
import LoginForm from "@/components/LoginForm";

export default function Login() {
  const router = useRouter();

  const handleRegisterSuccess = async () => {
    await router.push("./home");
  };

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      Login page
      <LoginForm onSuccess={handleRegisterSuccess} />
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const cookies = parseCookies(context);
  const userToken = cookies.token;

  if (userToken) {
    return {
      redirect: {
        destination: "/home",
        permanent: false,
      },
    };
  }

  return { props: {} };
};
