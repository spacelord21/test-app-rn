import { styled } from "@shared/ui";
import { AvatarCircle, Camera } from "./ui";
import { CameraContextProvider } from "./context";
import { useCamera } from "./hooks";

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.palette.background.primary};
  justify-content: center;
  align-items: center;
`;

const Flex = styled.View`
  flex: 0.6;
`;

export const Avatar = () => {
  const { startCamera, isCameraStarted, setStartCamera } = useCamera();
  return (
    <CameraContextProvider>
      <Container>
        {isCameraStarted ? (
          <Camera setStartCamera={setStartCamera} />
        ) : (
          <>
            <AvatarCircle startCamera={startCamera} />
            <Flex />
          </>
        )}
      </Container>
    </CameraContextProvider>
  );
};
