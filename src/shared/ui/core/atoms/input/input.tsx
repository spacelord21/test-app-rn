import { styled } from "../../../theme";
import { TextInput } from "react-native";

const Container = styled.View`
  width: 90%;
  height: 60px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.palette.background.secondary};
  margin: ${({ theme }) => theme.spacing(1)}px;
`;

const CustomInput = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.palette.text.primary,
}))`
  color: ${({ theme }) => theme.palette.text.primary};
  margin-left: ${({ theme }) => theme.spacing(3)}px;
  font-size: ${({ theme }) => theme.typography.subtitle.size};
  letter-spacing: ${({ theme }) => theme.typography.subtitle.letterSpacing};
  font-family: ${({ theme }) => theme.typography.subtitle.fontFamily};
  width: 90%;
`;

interface TInputProps {
  type?: "text" | "password";
  onChange: (value: string) => void;
  value: string;
  placeholder?: string;
}

export const Input = ({ type, onChange, value, placeholder }: TInputProps) => {
  const isForPassword = type === "password";
  return (
    <Container>
      <CustomInput
        secureTextEntry={isForPassword ? true : false}
        onChangeText={onChange}
        value={value}
        placeholder={placeholder}
      />
      {isForPassword ? null : null}
    </Container>
  );
};
