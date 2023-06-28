import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TMainStackParamList } from "../types";
import { Authorization } from "@pages/authorization";
import { MapLocation } from "@pages/map-location";

const Stack = createNativeStackNavigator<TMainStackParamList>();
const defaultOptions = {
  headerShown: false,
};

export const MainStackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="screenWithMap">
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
    </Stack.Navigator>
  );
};
