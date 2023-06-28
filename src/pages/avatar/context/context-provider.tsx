import { Camera } from "expo-camera";
import { createContext, ReactNode, useContext, useState } from "react";

export type TCameraContext = {
  camera: Camera | null;
  photo: string;
  setPhoto: (value: string) => void;
  setCamera: (value: Camera) => void;
};

const initialState: TCameraContext = {
  camera: null,
  photo: "",
  setPhoto: () => null,
  setCamera: () => null,
};

export const CameraContext = createContext<TCameraContext>(initialState);

type Props = {
  children: ReactNode;
};

export const CameraContextProvider = ({ children }: Props) => {
  const [photo, setPhoto] = useState("");
  const [camera, setCamera] = useState<Camera | null>(null);

  return (
    <CameraContext.Provider
      value={{
        camera: camera,
        photo: photo,
        setPhoto: setPhoto,
        setCamera: setCamera,
      }}
    >
      {children}
    </CameraContext.Provider>
  );
};

export const useCameraContext = () => useContext(CameraContext);
