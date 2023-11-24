import { GetServerSideProps } from "next";
import { Inter } from "next/font/google";
import { parseCookies } from "nookies";
import { DbLeaderboardAdapter } from "@/adapters/firebase";
import NavigationButton from "@/components/NavigationButton";
import LeaderboardTable from "@/components/table/Table";
import { LeaderboardEntry } from "@/models/Leaderboard";
import LeaderboardService from "@/services/LeaderboardService";

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

  const leaderboardAdapter = new DbLeaderboardAdapter();
  const leaderboardService = new LeaderboardService(leaderboardAdapter);

  const leaderboardData = await leaderboardService.getTopScores(20);

  try {
    return { props: { leaderboardData } };
  } catch (error) {
    console.error(error);
    return { props: { leaderboardData: [] } };
  }
};
