import { useRouter } from "next/router";
import useSWRMutation from "swr/mutation";
import { GameEvent } from "@/models/Game";

export type RequestGameData = {
  startedAt: Date;
  endedAt: Date;
  events: GameEvent[];
  score: number;
};

type ResponseData = {
  id: string;
  errors?: string[];
};

type ScoreData = {
  errors?: string[];
  id: string;
  score: number;
  username: string;
};

async function endGameRequest(
  url: string,
  options: Readonly<{ arg: { gameData: RequestGameData } }>,
) {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(options.arg.gameData),
  })
    .then((res) => {
      if (res.status === 401) {
        throw new Error("Unauthorized");
      }
      if (res.status > 400) {
        throw new Error("Network call failed");
      }
      return res;
    })
    .then((res) => res.json() as Promise<ResponseData>)
    .then((body) => {
      if (body.errors) {
        throw new Error(body.errors.join(" "));
      }
      return body;
    });
}

async function getScoreData(url: string) {
  console.debug("res", "here");
  return fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (res.status === 401) {
        throw new Error("Unauthorized");
      }
      if (res.status > 400) {
        throw new Error("Network call failed");
      }
      return res;
    })
    .then((res) => res.json() as Promise<ScoreData>)
    .then((body) => {
      if (body.errors) {
        throw new Error(body.errors.join(" "));
      }
      return body;
    });
}

export const useEndGame = () => {
  const router = useRouter();
  const {
    trigger: endGame,
    isMutating: loading,
    error,
    data,
  } = useSWRMutation("/api/games", endGameRequest, {
    throwOnError: false,
  });

  if (error && error.message === "Unauthorized") {
    void router.push("/login");
  }

  return {
    endGame,
    loading,
    error,
    data,
  };
};

export const useGetScore = (id: string) => {
  const {
    trigger: getScore,
    isMutating: loading,
    error,
    data,
  } = useSWRMutation(`/api/games?id=${id}`, getScoreData, {
    throwOnError: false,
  });

  return {
    getScore,
    loading,
    error,
    data,
  };
};
