import { styled } from "../../../theme";
import { ReactNode, isValidElement } from "react";
import { Typography } from "../typography";
import { StyleProp, ViewStyle } from "react-native";

const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 60px;
  background-color: ${({ theme }) => theme.palette.text.primary};
  margin-top: ${({ theme }) => theme.spacing(2)}px;
  border-radius: 5px;
`;

const ButtonContent = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.secondary};
`;

type TButtonProps = {
  onPress: () => void;
  children: string | ReactNode;
};

export const PrimaryButton = ({ onPress, children }: TButtonProps) => {
  return (
    <Button activeOpacity={0.7} onPress={onPress}>
      {!isValidElement(children) ? (
        <ButtonContent variant="subtitle">{children}</ButtonContent>
      ) : (
        children
      )}
    </Button>
  );
};
