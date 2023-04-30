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

const Image = styled.Image``;

type TAvatarCircleProps = {
  image?: string;
  onPress: () => void;
};

export const AvatarCircle = ({ image, onPress }: TAvatarCircleProps) => {
  return (
    <Circle activeOpacity={0.9} onPress={onPress}>
      {image ? (
        <Image source={{ uri: image }} />
      ) : (
        <Typography>Добавьте аватар</Typography>
      )}
    </Circle>
  );
};
