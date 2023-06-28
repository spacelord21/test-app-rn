import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TAppStackParamList } from "../types";
import { AppStackNavigation } from "../app-stack-navigation";
import { AuthDrawerNavigation } from "../auth-drawer-navigation";

const Stack = createNativeStackNavigator<TAppStackParamList>();
const defaultOptions = {
  headerShown: false,
};
export const RootStackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="authStack">
      <Stack.Screen
        name="authStack"
        component={AuthDrawerNavigation}
        options={{ ...defaultOptions }}
      />
      <Stack.Screen
        name="appStack"
        component={AppStackNavigation}
        options={{ ...defaultOptions }}
      />
    </Stack.Navigator>
  );
};
