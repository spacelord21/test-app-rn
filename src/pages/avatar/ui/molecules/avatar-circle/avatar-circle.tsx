import { useCamera } from "@pages/avatar/hooks";
import { useCameraContext } from "../../../context";
import { Typography, styled } from "@shared/ui";

const Circle = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.palette.background.secondary};
  border-radius: 100px;
  width: 200px;
  height: 200px;
  justify-content: center;
  align-items: center;
  object-fit: contain;
`;

const Image = styled.Image`
  width: 200px;
  height: 200px;
  border-radius: 100px;
`;

type TAvatarCircleProps = {
  startCamera: () => void;
};

export const AvatarCircle = ({ startCamera }: TAvatarCircleProps) => {
  const { photo } = useCameraContext();
  return (
    <Circle activeOpacity={0.9} onPress={startCamera}>
      {photo ? (
        <Image source={{ uri: photo }} />
      ) : (
        <Typography>Добавьте аватар</Typography>
      )}
    </Circle>
  );
};
