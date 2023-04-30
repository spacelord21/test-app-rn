import { Typography, styled } from "@shared/ui";

import { AvatarCircle, Camera } from "./ui";
import { useCamera } from "./hooks";

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.palette.background.primary};
  justify-content: center;
  align-items: center;
  /* object-fit: contain; */
`;

const Flex = styled.View`
  flex: 0.6;
`;

export const Avatar = () => {
  const { isCameraStarted, startCamera } = useCamera();

  return (
    <Container>
      {isCameraStarted ? (
        <Camera />
      ) : (
        <>
          <AvatarCircle onPress={startCamera} />
          <Flex />
        </>
      )}
    </Container>
  );
};
