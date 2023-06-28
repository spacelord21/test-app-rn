import { TAppStackParamList } from "@app/navigation/types";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { PrimaryButton, Typography, styled } from "@shared/ui";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Text = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.primary};
`;

type Navigation = NativeStackNavigationProp<TAppStackParamList, "authStack">;

export const Done = () => {
  const navigation = useNavigation<Navigation>();
  return (
    <Container>
      <Text variant="title">Hey there!</Text>
      <PrimaryButton
        onPress={() => {
          navigation.navigate("authStack", {
            screen: "authScreen",
          });
        }}
      >
        Go to auth
      </PrimaryButton>
    </Container>
  );
};
