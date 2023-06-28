import Svg, { Path } from "react-native-svg";
import { TBaseIconProps } from "./types";
export const Location = ({ size, color }: TBaseIconProps) => {
  return (
    <Svg width={size ?? 36} height={size ?? 36} viewBox="0 0 21 21" fill="none">
      <Path
        stroke={color ?? "black"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="0.6"
        d="m5.252 9.975l11.66-5.552c1.7-.81 3.474.965 2.665 2.666l-5.552 11.659c-.759 1.593-3.059 1.495-3.679-.158L9.32 15.851a2 2 0 0 0-1.17-1.17l-2.74-1.027c-1.652-.62-1.75-2.92-.157-3.679Z"
      />
    </Svg>
  );
};
