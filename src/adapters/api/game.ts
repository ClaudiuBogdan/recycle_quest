import useSWRMutation from "swr/mutation";

type ResponseData = {
  error?: string;
};

type ResultsData = Array<{
  asset_name: string;
  container: string;
}>;

async function endGameRequest(
  url: string,
  options: Readonly<{ arg: { result: ResultsData } }>,
) {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username: options.arg.result }),
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
