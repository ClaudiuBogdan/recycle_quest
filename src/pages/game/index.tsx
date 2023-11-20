import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { parseCookies } from "nookies";
import { useCallback } from "react";
import { useEndGame } from "@/adapters/api/game";
import Game from "@/components/game/Game";
import { ITrashItemApi } from "@/components/game/types";

export default function GamePage() {
  const { endGame, data, loading } = useEndGame();
  const router = useRouter();

  const handleGameEnded = useCallback(
    (items: ITrashItemApi[]) => {
      if (data || loading) {
        return;
      }

      const result: Array<{ asset_name: string; container: string }> =
        items.map((item) => ({
          asset_name: item.image,
          container: item.selectedBin || "",
        }));
      endGame({ result })
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
      console.log(items);
    },
    [endGame, data, loading, router],
  );

  return (
    <main>
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
