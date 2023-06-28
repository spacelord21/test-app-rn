import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Logo, styled } from "@shared/ui";

const Container = styled.View`
  flex: 1;
  position: relative;
`;

const LogoWrapper = styled.View`
  margin-top: ${({ theme }) => theme.spacing(5)}px;
  justify-content: center;
  align-items: center;
`;

type Props = DrawerContentComponentProps & {};

export const SideBarMenu = ({ ...props }: Props) => {
  const { state, navigation } = props;
  const routeName = (item: string) => {
    switch (item) {
      case "authScreen":
        return "Авторизация";
      case "screenWithMap":
        return "Геолокация";
      case "avatarChoose":
        return "Выбор аватара";
      default:
        return "";
    }
  };
  console.log(state);

  return (
    <Container>
      <LogoWrapper>
        <Logo focus={true} />
      </LogoWrapper>

      <DrawerContentScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
      >
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </Container>
  );
};
