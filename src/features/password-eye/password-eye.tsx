import { EyeOpen, EyeClose } from "@shared/ui/icons";
import { styled } from "@shared/ui/theme";
import { useTheme } from "styled-components";

type TPasswordEyeProps = {
  type: "password" | "text";
  setType: (value: "password" | "text") => void;
};

const Eye = styled.TouchableOpacity`
  position: absolute;
  right: ${({ theme }) => theme.spacing(3)}px;
`;

export const PasswordEye = ({ type, setType }: TPasswordEyeProps) => {
  const theme = useTheme();
  return type === "password" ? (
    <Eye onPress={() => setType("text")} activeOpacity={0.7}>
      <EyeClose color={theme.palette.text.primary} size={24} />
    </Eye>
  ) : (
    <Eye onPress={() => setType("password")} activeOpacity={0.7}>
      <EyeOpen color={theme.palette.text.primary} size={24} />
    </Eye>
  );
};
