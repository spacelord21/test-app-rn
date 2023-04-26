import { styled } from "../../../theme";

const MyImage = styled.Image`
  height: 104px;
  margin-bottom: ${({ theme }) => theme.spacing(5)}px;
`;
export const Logo = () => {
  return (
    <MyImage
      source={require("./image.png")}
      style={{ resizeMode: "contain", width: "70%" }}
    />
  );
};
