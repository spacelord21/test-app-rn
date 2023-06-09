import { useCamera } from "@pages/avatar/hooks";
import { Flip, styled } from "@shared/ui";
import { Camera as ExpoCamera, FlashMode } from "expo-camera";
import { useTheme } from "styled-components";
import { FlashModeChoose } from "../../atoms";
import { useState } from "react";
import { ImagePreview } from "../image-preview";
import { useCameraContext } from "@pages/avatar/context";

const CameraView = styled(ExpoCamera)`
  flex: 0.8;
  height: 90%;
  border: 1px solid red;
  width: 100%;
  position: absolute;
  z-index: 500;
  top: ${({ theme }) => theme.spacing(-5)}px;
`;

const Container = styled.View`
  flex: 1;
  width: 100%;
  height: 80%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
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
  bottom: ${({ theme }) => theme.spacing(0)}px;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 120px;
  background-color: ${({ theme }) => theme.palette.accent["color-primary-900"]};
  z-index: 500;
`;

const FlipButton = styled.TouchableOpacity``;

type TCameraProps = {
  setStartCamera: (value: boolean) => void;
};

export const Camera = ({ setStartCamera }: TCameraProps) => {
  const theme = useTheme();
  const {
    toggleCameraType,
    type,
    takePicture,
    previewVisible,
    setPreviewVisible,
    startCamera,
  } = useCamera();
  const { photo, setPhoto, setCamera } = useCameraContext();
  const [flashType, setFlashType] = useState<FlashMode>(FlashMode.off);

  return (
    <Container>
      {photo && previewVisible ? (
        <ImagePreview
          photo={photo}
          onRetakePhoto={() => {
            setPreviewVisible(false);
            setPhoto("");
            startCamera();
          }}
          onContinuePress={() => {
            setPreviewVisible(false);
            setStartCamera(false);
          }}
        />
      ) : (
        <>
          <CameraView
            type={type}
            ratio="16:9"
            ref={(r) => setCamera(r!)}
            flashMode={flashType}
          />
          <ButtonsContainer>
            <FlipButton onPress={toggleCameraType}>
              <Flip color={theme.palette.background.secondary} />
            </FlipButton>
            <TakePictureButton onPress={takePicture} />
            <FlashModeChoose type={flashType} setType={setFlashType} />
          </ButtonsContainer>
        </>
      )}
    </Container>
  );
};
