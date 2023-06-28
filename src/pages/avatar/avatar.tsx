import { PrimaryButton, styled } from "@shared/ui";
import { AvatarCircle, AvatarPreview, Camera } from "./ui";
import { CameraContextProvider, useCameraContext } from "./context";
import { useCamera } from "./hooks";

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.palette.background.primary};
  justify-content: center;
  align-items: center;
`;

export const Avatar = () => {
  const { startCamera, isCameraStarted, setStartCamera } = useCamera();

  return (
    <CameraContextProvider>
      <Container>
        {isCameraStarted ? (
          <Camera setStartCamera={setStartCamera} />
        ) : (
          <AvatarPreview startCamera={startCamera} />
        )}
      </Container>
    </CameraContextProvider>
  );
};
