import { useState } from "react";

export const useAuth = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const authHandler = () => {
    console.log("username: ", username, "\n", "password: ", password);
  };

  return { username, setUsername, password, setPassword, authHandler };
};
