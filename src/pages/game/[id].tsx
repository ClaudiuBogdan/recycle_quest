import { GetServerSideProps } from "next";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import { parseCookies } from "nookies";
import { useEffect } from "react";
import { useGetScore } from "@/adapters/api/game";
import NavigationButton from "@/components/NavigationButton";

const inter = Inter({ subsets: ["latin"] });

export default function EndGamePage() {
  const router = useRouter();
  const { id: gameId } = router.query;
  console.log("Game id: ", gameId);

  const { getScore, data } = useGetScore(gameId?.toString() ?? "");

  useEffect(() => {
    if (!gameId) {
      return;
    }
    getScore()
      .then(() => {})
      .catch(() => {});
  }, [getScore, gameId]);

  return (
    <main
      className={`flex flex-col min-h-screen items-center justify-center space-y-6 bg-white p-8 ${inter.className}`}
    >
      <h1 className="text-4xl font-bold text-green-600">Game ended</h1>

      <p>Game ID: {gameId}</p>
      <p> {data?.id}</p>
      <p> {data?.score}</p>
      <NavigationButton path={"/home"} buttonName={"Home"} />
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
  const gameId: string | undefined = Array.isArray(context.params?.id)
    ? context.params?.id[0]
    : context.params?.id;

  if (!gameId) {
    return { props: { gamePlayData: null } };
  }

  // const gamePlayData = await getGamePlayData(gameId); // FIXME
  const gamePlayData: unknown = {}; //await getGamePlayData(gameId);
  console.log("gamePlayData: ", gamePlayData);
  try {
    return { props: { gamePlayData } };
  } catch (error) {
    console.error(error);
    return { props: { gamePlayData: null } };
  }
};
