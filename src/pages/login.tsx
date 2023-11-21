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
    <>
      <main
        className={`flex min-h-screen flex-col items-center justify-center p-20 bg-white`}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-green-600 pb-10">
          Login page
        </h1>

        <LoginForm onSuccess={handleRegisterSuccess} />
      </main>
    </>
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
