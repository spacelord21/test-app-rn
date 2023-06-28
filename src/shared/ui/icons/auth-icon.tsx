import Svg, { Path } from "react-native-svg";
import { TBaseIconProps } from "./types";
export const AuthIcon = ({ size, color }: TBaseIconProps) => {
  return (
    <Svg
      width={size ?? 36}
      height={size ?? 36}
      viewBox="0 0 48 48"
      fill={"none"}
    >
      <Path
        fill={"none"}
        stroke={color ?? "black"}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M24 43.5c1.69 0 15.25-7.77 15.25-16.94v-20c-4 0-15.25-2-15.25-2s-11.26 2-15.25 2v20C8.75 35.73 22.31 43.5 24 43.5Z"
      />
      <Path
        fill={color ?? "black"}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M27.39 18.9a3.39 3.39 0 1 0-6.78 0a3.33 3.33 0 0 0 2.07 3.1v3.13a1.32 1.32 0 0 0 2.64 0V22a3.39 3.39 0 0 0 2.07-3.1Z"
      />
    </Svg>
  );
};
