import useSWRMutation from "swr/mutation";

type ResponseData = {
  nickname: string;
  access_token: string;
  errors?: string[];
};

async function createUser(
  url: string,
  options: Readonly<{ arg: { nickname: string } }>,
) {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nickname: options.arg.nickname }),
  })
    .then((res) => {
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
