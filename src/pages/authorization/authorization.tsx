import { Input, Logo, PrimaryButton, Typography, styled } from "@shared/ui";
import { useAuth } from "./hooks";

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

  return (
    <Container>
      <Logo />
      <Input
        onChange={setUsername}
        value={username}
        placeholder="Логин"
        key="username"
      />
      <Input
        onChange={setPassword}
        value={password}
        placeholder="Пароль"
        key="password"
        type="password"
      />
      <PrimaryButton onPress={authHandler} children={"Авторизоваться"} />
    </Container>
  );
};
