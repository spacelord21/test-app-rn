import Svg, { Path } from "react-native-svg";
import { TBaseIconProps } from "./types";
export const UserIcon = ({ size, color }: TBaseIconProps) => {
  return (
    <Svg width={size ?? 34} height={size ?? 34} viewBox="0 0 256 256">
      <Path
        d="M227.46 214c-16.52-28.56-43-48.06-73.68-55.09a68 68 0 1 0-51.56 0c-30.64 7-57.16 26.53-73.68 55.09a4 4 0 0 0 6.92 4C55 184.19 89.62 164 128 164s73 20.19 92.54 54a4 4 0 0 0 3.46 2a3.93 3.93 0 0 0 2-.54a4 4 0 0 0 1.46-5.46ZM68 96a60 60 0 1 1 60 60a60.07 60.07 0 0 1-60-60Z"
        fill={color ?? "rgba(0, 0, 0, 0.54)"}
      />
    </Svg>
  );
};
