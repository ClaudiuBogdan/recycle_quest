import { GetServerSideProps } from "next";
import { Inter } from "next/font/google";
import { parseCookies } from "nookies";
import NavigationButton from "@/components/NavigationButton";
import LeaderboardTable from "@/components/table/Table";
import { getLeaderboard } from "@/dsl/leaderboard";
import { LeaderboardEntry } from "@/types";

const inter = Inter({ subsets: ["latin"] });

type LeaderboardProps = {
  leaderboardData: LeaderboardEntry[];
};

export default function Leaderboard({ leaderboardData }: LeaderboardProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen bg-white ${inter.className} px-16`}
    >
      <h1 className="text-6xl font-bold mb-4 text-green-600">Leaderboard</h1>
      <p className="text-lg mb-8">Check out the top performers below!</p>
      <div className="w-full max-w-screen-x1">
        <LeaderboardTable entries={leaderboardData} />
      </div>

      <div className="mt-16 w-full max-w-screen-x1">
        <NavigationButton path={"/home"} buttonName="Go back home" />
      </div>
    </div>
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

  const leaderboard = await getLeaderboard();

  try {
    return { props: { leaderboardData: leaderboard } };
  } catch (error) {
    console.error(error);
    return { props: { leaderboardData: [] } };
  }
};
