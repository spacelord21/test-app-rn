import { useEffect, useState } from "react";
import { Region } from "react-native-maps";
import * as Location from "expo-location";
import { Alert } from "react-native";

const initialPosition: Region = {
  latitude: 62,
  longitude: 91,
  latitudeDelta: 30,
  longitudeDelta: 30,
};

export const useCurrentLocation = () => {
  const [position, setPosition] = useState<Region>(initialPosition);

  const getCurrentPosition = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Местоположение",
        "Вы запретили доступ приложению к Вашей геолокации. Вы можете выдать разрешение в настройках",
        [
          {
            style: "cancel",
            text: "ОК",
          },
        ]
      );
    }
    const { coords } = await Location.getCurrentPositionAsync();
    setPosition({
      latitude: coords.latitude,
      longitude: coords.longitude,
      latitudeDelta: 0.03,
      longitudeDelta: 0.03,
    });
  };

  useEffect(() => {
    getCurrentPosition();
  }, []);

  return { position };
};
