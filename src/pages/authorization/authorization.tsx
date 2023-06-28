import { Input, Logo, PrimaryButton, Typography, styled } from "@shared/ui";
import { useAuth } from "./hooks";
import { useState } from "react";

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.palette.background.primary};
  justify-content: center;
  align-items: center;
`;

const Title = styled(Typography)``;

export const Authorization = () => {
  const { authHandler, password, setPassword, setUsername, username } =
    useAuth();
  const [focus, setFocus] = useState(false);

  return (
    <Container>
      <Logo focus={focus} />
      <Input
        onChange={setUsername}
        value={username}
        placeholder="Логин"
        key="username"
        setFocus={setFocus}
      />
      <Input
        onChange={setPassword}
        value={password}
        placeholder="Пароль"
        key="password"
        type="password"
        isPassword={true}
        setFocus={setFocus}
      />
      <PrimaryButton onPress={authHandler} children={"Авторизоваться"} />
    </Container>
  );
};
