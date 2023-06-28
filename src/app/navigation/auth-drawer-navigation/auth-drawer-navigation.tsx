import { createDrawerNavigator } from "@react-navigation/drawer";
import { TMainStackParamList } from "../types";
import { Authorization } from "@pages/authorization";
import { MapLocation } from "@pages/map-location";
import { Avatar } from "@pages/avatar";
import { SideBarMenu } from "@widgets/side-bar-menu";
import { useTheme } from "styled-components";
import { AuthIcon, Location, UserIcon } from "@shared/ui";

const Drawer = createDrawerNavigator<TMainStackParamList>();
const defaultOptions = {
  headerTransparent: true,
  headerTitle: "",
};

export const AuthDrawerNavigation = () => {
  const theme = useTheme();
  const itemOptions = {
    drawerActiveBackgroundColor: theme.palette.background.secondary,
    drawerActiveTintColor: theme.palette.text.primary,
    drawerInactiveTintColor: theme.palette.text.primary,
  };
  return (
    <Drawer.Navigator
      useLegacyImplementation
      drawerContent={(props) => <SideBarMenu {...props} />}
    >
      <Drawer.Screen
        name="authScreen"
        component={Authorization}
        options={{
          ...defaultOptions,
          ...itemOptions,
          title: "Авторизация",
          drawerIcon: () => (
            <AuthIcon color={theme.palette.accent["color-primary-600"]} />
          ),
        }}
      />
      <Drawer.Screen
        name="screenWithMap"
        component={MapLocation}
        options={{
          ...defaultOptions,
          ...itemOptions,
          title: "Геолокация",
          drawerIcon: () => (
            <Location color={theme.palette.accent["color-primary-600"]} />
          ),
        }}
      />
      <Drawer.Screen
        name="avatarChoose"
        component={Avatar}
        options={{
          ...defaultOptions,
          ...itemOptions,
          title: "Выбор аватара",
          drawerIcon: () => (
            <UserIcon color={theme.palette.accent["color-primary-600"]} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};
