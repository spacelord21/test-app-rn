import { useCameraContext } from "@pages/avatar/context";
import { Camera, CameraType } from "expo-camera";
import { useState } from "react";
import { Alert } from "react-native";

export const useCamera = () => {
  const [type, setType] = useState(CameraType.back);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [isCameraStarted, setStartCamera] = useState(false);
  const { camera, setPhoto } = useCameraContext();

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

  const takePicture = async () => {
    if (!camera) return;
    const { uri } = await camera.takePictureAsync();
    console.log("here");

    setPreviewVisible(true);
    setPhoto(uri);
  };

  return {
    type,
    toggleCameraType,
    startCamera,
    takePicture,
    previewVisible,
    setPreviewVisible,
    isCameraStarted,
    setStartCamera,
  };
};
