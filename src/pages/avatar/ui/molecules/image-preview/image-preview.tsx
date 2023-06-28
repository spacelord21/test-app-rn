import { Typography, styled } from "@shared/ui";

const Preview = styled.ImageBackground`
  flex: 1;
  width: 100%;
`;

const ButtonContainer = styled.View`
  position: absolute;
  bottom: ${({ theme }) => theme.spacing(3)}px;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  width: 100%;
`;

const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.palette.background.secondary};
`;

type TImagePreviewProps = {
  photo: string;
  onRetakePhoto: () => void;
  onContinuePress: () => void;
};

export const ImagePreview = ({
  photo,
  onRetakePhoto,
  onContinuePress,
}: TImagePreviewProps) => {
  return (
    <>
      <Preview source={{ uri: photo }} />
      <ButtonContainer>
        <Button onPress={onRetakePhoto}>
          <Typography>Переснять</Typography>
        </Button>
        <Button onPress={onContinuePress}>
          <Typography>Продолжить</Typography>
        </Button>
      </ButtonContainer>
    </>
  );
};
