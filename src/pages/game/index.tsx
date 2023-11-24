import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { parseCookies } from "nookies";
import { useCallback } from "react";
import { RequestGameData, useEndGame } from "@/adapters/api/game";
import ErrorMessage from "@/components/ErrorMessage";
import Game from "@/components/game/Game";

export default function GamePage() {
  const { endGame, data, loading, error } = useEndGame();
  const router = useRouter();

  const handleGameEnded = useCallback(
    (gameData: RequestGameData) => {
      if (data || loading || error) {
        return;
      }

      endGame({ gameData })
        .then((res) => {
          if (!res) {
            return;
          }
          router
            .push(`/game/${res.id}`)
            .then(() => void 0)
            .catch((err) => console.error(err));
        })
        .catch((err) => console.log(err));
    },
    [endGame, data, loading, error, router],
  );

  return (
    <main>
      {error && <ErrorMessage message={error.message} />}
      <Game onGameEnded={handleGameEnded} />
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
