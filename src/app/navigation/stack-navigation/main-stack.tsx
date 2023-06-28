import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TMainStackParamList } from "../types";
import { Authorization } from "@pages/authorization";

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
    </Stack.Navigator>
  );
};
