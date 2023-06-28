import MapView, { Circle } from "react-native-maps";
import { useCurrentLocation } from "./hooks";
import { PrimaryButton, styled } from "@shared/ui";
import { useTheme } from "styled-components";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { TMainStackParamList } from "@app/navigation/types";

const Flex = styled.View`
  flex: 0.8;
`;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Map = styled(MapView)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const radius = 500;
const circleWidth = 1.5;

type Navigation = NativeStackNavigationProp<
  TMainStackParamList,
  "screenWithMap"
>;

export const MapLocation = () => {
  const { position } = useCurrentLocation();
  const theme = useTheme();
  const navigation = useNavigation<Navigation>();

  return (
    <Container>
      <Map initialRegion={position} showsUserLocation region={position}>
        <Circle
          center={{
            latitude: position.latitude,
            longitude: position.longitude,
          }}
          radius={radius}
          strokeColor={theme.palette.text.primary}
          strokeWidth={circleWidth}
        />
      </Map>
      <Flex />
      <PrimaryButton
        onPress={() => {
          navigation.navigate("avatarChoose");
        }}
      >
        Далее
      </PrimaryButton>
    </Container>
  );
};
