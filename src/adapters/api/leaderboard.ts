import useSWRMutation from "swr/mutation";

type ResponseData = {
  id: string;
  username: string;
  highscore: number;
};

export async function getLeaderboardUsers(url: string) {
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
      if (res.status >= 400) {
        throw new Error("Network call failed");
      }
      return res;
    })
    .then(
      (res) =>
        res.json().then((t) => {
          return t;
        }) as Promise<ResponseData[]>,
    );
}

export const useLeaderboardUsers = () => {
  const {
    trigger: loadData,
    isMutating: loading,
    error,
    data,
  } = useSWRMutation("/api/leaderboard", getLeaderboardUsers, {
    throwOnError: false,
  });

  return {
    loadData,
    loading,
    error,
    data,
  };
};
