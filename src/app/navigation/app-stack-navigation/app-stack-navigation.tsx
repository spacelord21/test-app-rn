import { Done } from "@pages/done-screen";
import { TAppStackParamList, TDoneStackParamList } from "../types";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator<TDoneStackParamList>();
const defaultOptions = {
  headerShown: false,
};
export const AppStackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="done">
      <Stack.Screen
        name="done"
        component={Done}
        options={{ ...defaultOptions }}
      />
    </Stack.Navigator>
  );
};
