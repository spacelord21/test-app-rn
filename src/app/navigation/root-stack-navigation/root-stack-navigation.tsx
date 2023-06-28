import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TAppStackParamList } from "../types";
import { MainStackNavigation } from "../stack-navigation";
import { AppStackNavigation } from "../app-stack-navigation";

const Stack = createNativeStackNavigator<TAppStackParamList>();
const defaultOptions = {
  headerShown: false,
};
export const RootStackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="authStack">
      <Stack.Screen
        name="authStack"
        component={MainStackNavigation}
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
