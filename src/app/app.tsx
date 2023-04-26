import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { MainStackNavigation } from "./navigation";

export default function App() {
  return (
    <NavigationContainer>
      <MainStackNavigation />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blue",
  },
  text: {
    color: "#fff",
  },
});
