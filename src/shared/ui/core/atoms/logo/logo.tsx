import { styled } from "../../../theme";

type TLogoProps = {
  focus: boolean;
};

const MyImage = styled.Image<TLogoProps>`
  height: ${({ focus }) => (focus ? 50 : 104)}px;
  width: 70%;
  margin-bottom: ${({ theme }) => theme.spacing(5)}px;
`;

export const Logo = ({ focus }: TLogoProps) => {
  return (
    <MyImage
      focus={focus}
      source={require("./image.png")}
      style={{ resizeMode: "contain" }}
    />
  );
};
