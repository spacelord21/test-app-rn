import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TMainStackParamList } from "../types";
import { Authorization } from "@pages/authorization";
import { MapLocation } from "@pages/map-location";
import { Avatar } from "@pages/avatar";

const Stack = createNativeStackNavigator<TMainStackParamList>();
const defaultOptions = {
  headerShown: false,
};

export const MainStackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="authScreen">
      <Stack.Screen
        name="authScreen"
        component={Authorization}
        options={{ ...defaultOptions }}
      />
      <Stack.Screen
        name="screenWithMap"
        component={MapLocation}
        options={{ ...defaultOptions }}
      />
      <Stack.Screen
        name="avatarChoose"
        component={Avatar}
        options={{ ...defaultOptions }}
      />
    </Stack.Navigator>
  );
};
