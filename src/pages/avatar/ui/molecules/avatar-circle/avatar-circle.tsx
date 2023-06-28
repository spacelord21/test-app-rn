import { useTheme } from "styled-components";
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
  const theme = useTheme();
  return (
    <Circle
      activeOpacity={0.9}
      onPress={startCamera}
      style={{
        shadowColor: theme.palette.accent["color-primary-600"],
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.7,
        shadowRadius: 3,
        elevation: 70,
      }}
    >
      {photo ? (
        <Image source={{ uri: photo }} />
      ) : (
        <Typography>Добавьте аватар</Typography>
      )}
    </Circle>
  );
};
