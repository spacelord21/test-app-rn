import { NavigatorScreenParams } from "@react-navigation/core";

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
