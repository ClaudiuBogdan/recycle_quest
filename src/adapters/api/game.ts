import useSWRMutation from "swr/mutation";

type ResponseData = {
  id: string;
  error?: string;
};

type ResultsData = Array<{
  asset_name: string;
  container: string;
}>;

type ScoreData = {
  error: string;
  id: string;
  score: number;
  username: string;
};

async function endGameRequest(
  url: string,
  options: Readonly<{ arg: { result: ResultsData } }>,
) {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ result: options.arg.result }),
  })
    .then((res) => {
      console.log("Error: ", res);
      if (res.status > 400) {
        throw new Error("Network call failed");
      }
      return res;
    })
    .then((res) => res.json() as Promise<ResponseData>)
    .then((body) => {
      if (body.error) {
        throw new Error(body.error);
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
      console.log("Error: ", res);
      if (res.status > 400) {
        throw new Error("Network call failed");
      }

      return res;
    })
    .then((res) => res.json() as Promise<ScoreData>)
    .then((body) => {
      if (body.error) {
        throw new Error(body.error);
      }
      return body;
    });
}

export const useEndGame = () => {
  const {
    trigger: endGame,
    isMutating: loading,
    error,
    data,
  } = useSWRMutation("/api/gameplay", endGameRequest, {
    throwOnError: false,
  });

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
  } = useSWRMutation(`/api/gameplay?id=${id}`, getScoreData, {
    throwOnError: false,
  });

  return {
    getScore,
    loading,
    error,
    data,
  };
};
