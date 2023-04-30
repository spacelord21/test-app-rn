import { Camera, CameraType, FlashMode } from "expo-camera";
import { useState } from "react";
import { Alert } from "react-native";

export const useCamera = () => {
  const [type, setType] = useState(CameraType.back);
  const [permission, requstPermission] = Camera.useCameraPermissions();
  const [isCameraStarted, setStartCamera] = useState(false);
  const [flashMode, setFlashMode] = useState(FlashMode.auto);

  const toggleCameraType = () => {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  };

  const startCamera = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Камера",
        "Вы запретили доступ приложению к Вашей камере. Вы можете выдать разрешение в настройках",
        [
          {
            style: "cancel",
            text: "ОК",
          },
        ]
      );
      setStartCamera(false);
    }
    setStartCamera(true);
  };

  return {
    type,
    requstPermission,
    toggleCameraType,
    isCameraStarted,
    startCamera,
  };
};
