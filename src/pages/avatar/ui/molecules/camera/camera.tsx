import { useCamera } from "@pages/avatar/hooks";
import { Flip, styled } from "@shared/ui";
import { Camera as ExpoCamera } from "expo-camera";
import { useTheme } from "styled-components";

const CameraView = styled(ExpoCamera)`
  flex: 1;
  width: 100%;
  /* height: 80%; */
  /* position: absolute;
  top: 0; */
`;

const TakePictureButton = styled.TouchableOpacity`
  border-radius: 100px;
  background-color: ${({ theme }) => theme.palette.background.primary};
  width: 70px;
  height: 70px;
`;

const ButtonsContainer = styled.View`
  position: absolute;
  bottom: ${({ theme }) => theme.spacing(2)}px;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  width: 100%;
`;

const FlipButton = styled.TouchableOpacity``;

export const Camera = () => {
  const theme = useTheme();
  const { toggleCameraType, type } = useCamera();
  return (
    <CameraView type={type} ratio="16:9">
      <ButtonsContainer>
        <FlipButton onPress={toggleCameraType}>
          <Flip color={theme.palette.background.primary} />
        </FlipButton>
        <TakePictureButton />
      </ButtonsContainer>
    </CameraView>
  );
};
