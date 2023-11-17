import { useEffect, useState } from "react";

// Define the type for the hook's return value
interface UseTokenHook {
  token: string | null;
  setToken: (newToken: string) => void;
}

// Custom hook for token management in local storage
export const useToken = (): UseTokenHook => {
  const [token, setTokenState] = useState<string | null>(null);

  // Function to save token to local storage and update state
  const setToken = (newToken: string) => {
    localStorage.setItem("userToken", newToken);
    setTokenState(newToken);
  };

  // Effect to load the token from local storage on component mount
  useEffect(() => {
    const storedToken = localStorage.getItem("userToken");
    if (storedToken) {
      setTokenState(storedToken);
    }
  }, []);

  return { token, setToken };
};
