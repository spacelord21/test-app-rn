import Svg, { Path } from "react-native-svg";
import { TBaseIconProps } from "./types";
import { useTheme } from "styled-components";
export const FlashAuto = ({ size, color }: TBaseIconProps) => {
  const theme = useTheme();
  return (
    <Svg width={size ?? 24} height={size ?? 24} viewBox="0 0 24 24" fill="none">
      <Path
        d="M5 22v-8H2V2h10l-2 7h4L5 22Zm9.625-11L18 2h1.6l3.425 9h-1.55l-.8-2.3h-3.7l-.8 2.3h-1.55Zm2.8-3.6h2.75L18.85 3.65h-.05L17.425 7.4Z"
        fill={theme.palette.background.secondary}
      />
    </Svg>
  );
};

export const FlashOff = ({ size, color }: TBaseIconProps) => {
  const theme = useTheme();
  return (
    <Svg width={size ?? 24} height={size ?? 24} viewBox="0 0 24 24" fill="none">
      <Path
        d="M7 2h10l-2 7h4l-2.925 4.225L7 4.15V2Zm3 20v-8H7V9.85L1.375 4.225L2.8 2.8l18.4 18.4l-1.425 1.425L13.75 16.6L10 22Z"
        fill={theme.palette.background.secondary}
      />
    </Svg>
  );
};

export const FlashOn = ({ size, color }: TBaseIconProps) => {
  const theme = useTheme();
  return (
    <Svg width={size ?? 24} height={size ?? 24} viewBox="0 0 24 24" fill="none">
      <Path
        d="M10 22v-8H7V2h10l-2 7h4l-9 13Z"
        fill={theme.palette.background.secondary}
      />
    </Svg>
  );
};
