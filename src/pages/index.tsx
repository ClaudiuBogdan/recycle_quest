import { GetServerSideProps } from "next";
import { Inter } from "next/font/google";
import { parseCookies } from "nookies";
import NavigationButton from "@/components/NavigationButton";

const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  const buttonStartText = "Let's play";
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between main-section ${inter.className}`}
    >
      Landing page
      <NavigationButton path={"/login"} buttonName={buttonStartText} />
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
