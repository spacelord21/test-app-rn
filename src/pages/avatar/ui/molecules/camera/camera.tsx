import { useCamera } from "@pages/avatar/hooks";
import { Flip, styled } from "@shared/ui";
import { Camera as ExpoCamera, FlashMode } from "expo-camera";
import { useTheme } from "styled-components";
import { FlashModeChoose } from "../../atoms";
import { useState } from "react";

const CameraView = styled(ExpoCamera)`
  flex: 1;
  width: 100%;
`;

const Container = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TakePictureButton = styled.TouchableOpacity`
  border-radius: 100px;
  background-color: transparent;
  border: 1.5px solid ${({ theme }) => theme.palette.background.secondary};
  width: 70px;
  height: 70px;
`;

const ButtonsContainer = styled.View`
  position: absolute;
  bottom: ${({ theme }) => theme.spacing(2)}px;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  width: 100%;
`;

const FlipButton = styled.TouchableOpacity``;

export const Camera = () => {
  const theme = useTheme();
  const { toggleCameraType, type } = useCamera();
  const [flashType, setFlashType] = useState<FlashMode>(FlashMode.off);
  return (
    <Container>
      <CameraView type={type} ratio="16:9" />
      <ButtonsContainer>
        <FlipButton onPress={toggleCameraType}>
          <Flip color={theme.palette.background.secondary} />
        </FlipButton>
        <TakePictureButton />
        <FlashModeChoose type={flashType} setType={setFlashType} />
      </ButtonsContainer>
    </Container>
  );
};
