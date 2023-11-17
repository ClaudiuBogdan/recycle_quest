import { GetServerSideProps } from "next";
import { Inter } from "next/font/google";
import { parseCookies } from "nookies";
import NavigationButton from "@/components/NavigationButton";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const newGameText = "New Game";
  const leaderboardText = "Leaderboard";
  const infoText = "Info";

  return (
    <main
      className={`flex flex-col min-h-screen items-center justify-center space-y-6 bg-white p-8 ${inter.className}`}
    >
      <h1 className="text-4xl font-bold text-green-600">
        Welcome to RecycleQuest
      </h1>
      <div className={"max-w-2xl"}>
        <NavigationButton path={"/game"} buttonName={newGameText} />
        <NavigationButton path={"/leaderboard"} buttonName={leaderboardText} />
        <NavigationButton path={"/info"} buttonName={infoText} />
      </div>
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
