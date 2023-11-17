import { GetServerSideProps } from "next";
import { Inter } from "next/font/google";
import { parseCookies } from "nookies";
import NavigationButton from "@/components/NavigationButton";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const newGameText = "New game";
  const leaderboardText = "Leader board";
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between ${inter.className}`}
    >
      Home page
      <NavigationButton path={"/game"} buttonName={newGameText} />
      <NavigationButton path={"/leaderboard"} buttonName={leaderboardText} />
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const cookies = parseCookies(context);
  const userToken = cookies.token;

  if (!userToken) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return { props: {} };
};
