import { Input, Logo, PrimaryButton, Typography, styled } from "@shared/ui";
import { useAuth } from "./hooks";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { TMainStackParamList } from "@app/navigation/types";
import { ActivityIndicator } from "react-native";
import { useTheme } from "styled-components";
import { DrawerNavigationProp } from "@react-navigation/drawer";

type Navigation = DrawerNavigationProp<TMainStackParamList, "authScreen">;

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.palette.background.primary};
  justify-content: center;
  align-items: center;
`;

export const Authorization = () => {
  const { authHandler, password, setPassword, setUsername, username } =
    useAuth();
  const [focus, setFocus] = useState(false);
  const navigation = useNavigation<Navigation>();
  const [loading, setLoading] = useState(false);
  const theme = useTheme();

  const onAuthPressHandler = async () => {
    setLoading(true);
    authHandler().then(() => {
      setLoading(false);
      navigation.navigate("screenWithMap");
    });
  };

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
      <PrimaryButton onPress={onAuthPressHandler} disabled={loading}>
        {loading ? (
          <ActivityIndicator
            size={"small"}
            color={theme.palette.accent["color-primary-600"]}
          />
        ) : (
          "Авторизоваться"
        )}
      </PrimaryButton>
    </Container>
  );
};
