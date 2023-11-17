import useSWRMutation from "swr/mutation";

type ResponseData = {
  username: string;
  access_token: string;
};

async function createUser(
  url: string,
  options: Readonly<{ arg: { username: string } }>,
) {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username: options.arg.username }),
  })
    .then((res) => {
      if (res.status >= 400) {
        throw new Error("Network call failed");
      }
      return res;
    })
    .then((res) => res.json() as Promise<ResponseData>);
}

export const useRegisterUser = () => {
  const {
    trigger: register,
    isMutating: loading,
    error,
    data,
  } = useSWRMutation("/api/users", createUser, {
    throwOnError: false,
  });

  return {
    register,
    loading,
    error,
    data,
  };
};