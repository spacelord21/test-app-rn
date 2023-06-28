import { NavigatorScreenParams } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type TMainStackParamList = {
  authScreen: undefined;
  screenWithMap: undefined;
  avatarChoose: undefined;
};

export type TDoneStackParamList = {
  done: undefined;
};

export type TAppStackParamList = {
  authStack: NavigatorScreenParams<TMainStackParamList>;
  appStack: undefined;
};
