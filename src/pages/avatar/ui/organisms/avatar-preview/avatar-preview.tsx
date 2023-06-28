import { PrimaryButton, Typography, styled } from "@shared/ui";
import { AvatarCircle } from "../../molecules";
import { useCameraContext } from "@pages/avatar/context";
import { useNavigation } from "@react-navigation/core";
import { TAppStackParamList } from "@app/navigation/types";
import { DrawerNavigationProp } from "@react-navigation/drawer";

const Container = styled.View`
  flex: 1;
  width: 100%;
  justify-content: space-around;
  align-items: center;
`;

const Text = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.primary};
  text-align: center;
`;

type TAvatarPreviewProps = {
  startCamera: () => void;
};

type Navigation = DrawerNavigationProp<TAppStackParamList, "authStack">;

export const AvatarPreview = ({ startCamera }: TAvatarPreviewProps) => {
  const { photo } = useCameraContext();
  const navigation = useNavigation<Navigation>();
  const photoNotUploaded = photo.length === 0;
  return (
    <Container>
      <AvatarCircle startCamera={startCamera} />
      {photoNotUploaded ? (
        <Text variant="title">Пожалуйста, загрузите аватар!</Text>
      ) : (
        <Text variant="title">Отлично! Аватар загружен, можем продолжать!</Text>
      )}
      <PrimaryButton
        onPress={() => {
          navigation.navigate("appStack");
        }}
        disabled={photoNotUploaded}
      >
        Продолжить
      </PrimaryButton>
    </Container>
  );
};
