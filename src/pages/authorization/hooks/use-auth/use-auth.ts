import { useState } from "react";
const DEFAULT_TIMEOUT = 3000;

export const useAuth = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const sleep = (ms: number) => {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  };

  const authHandler = async () => {
    return await sleep(DEFAULT_TIMEOUT);
  };

  return { username, setUsername, password, setPassword, authHandler };
};
