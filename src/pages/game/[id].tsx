import { GetServerSideProps } from "next";
import { Inter } from "next/font/google";
import { parseCookies } from "nookies";
import { DbGameAdapter, DbUserAdapter } from "@/adapters/firebase";
import ErrorMessage from "@/components/ErrorMessage";
import NavigationButton from "@/components/NavigationButton";
import GameStatsComponent from "@/components/stats/GameStatsComponent";
import { GameStats } from "@/models/Game";
import GameService from "@/services/GameService";
import UserService from "@/services/UserService";

const inter = Inter({ subsets: ["latin"] });
type EndGamePageProps = {
  nickname: string;
  score: number;
  stats: GameStats;
  error?: string;
};

export default function EndGamePage({
  nickname,
  score,
  stats,
  error,
}: EndGamePageProps) {
  return (
    <main
      className={`flex flex-col min-h-screen items-center justify-center space-y-6 bg-white p-8 ${inter.className}`}
    >
      <h1 className="text-4xl font-bold text-green-600">
        Congratulations, {nickname}!
      </h1>
      {error ? (
        <ErrorMessage message={error} />
      ) : (
        <GameStatsComponent gameStats={stats} score={score} />
      )}
      <NavigationButton path={"/home"} buttonName={"Home"} />
    </main>
  );
}

async function fetchGameData(gameId: string) {
  const gameDbAdapter = new DbGameAdapter();
  const gameService = new GameService(gameDbAdapter);
  return gameService.getGameById(gameId);
}

async function fetchUser(token: string) {
  const userAdapter = new DbUserAdapter();
  const userService = new UserService(userAdapter);
  return userService.getUserByToken(token);
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

  const errorData = { props: { error: "Failed to load game data" } };

  const gameId = Array.isArray(context.params?.id)
    ? context.params?.id[0]
    : context.params?.id;

  if (!gameId) {
    return errorData;
  }

  try {
    const user = await fetchUser(userToken);
    const gameData = await fetchGameData(gameId);

    console.log({ gameData });

    if (!gameData || !user) {
      return errorData;
    }

    if (gameData.userId !== user.id) {
      return { props: { error: "Failed to load game data" } };
    }

    return {
      props: {
        ...gameData,
        nickname: user.nickname,
      },
    };
  } catch (error) {
    console.error(error);
    // Handle the error appropriately
    return errorData;
  }
};
