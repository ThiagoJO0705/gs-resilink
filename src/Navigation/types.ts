import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { EnergyOutageEvent } from "../types";

type RootStackParamList = {
  GeneralOverview: undefined;
  AffectedLocation: undefined;
  InterruptionTime: { location: string };
  DamagesDescription: { location: string; interruptionTime: string };
  Recommendations: undefined;
  EventDetail: { event: EnergyOutageEvent };
};

type AppNavigationProp = NativeStackNavigationProp<RootStackParamList>;
type InterruptionTimeRouteProp = RouteProp<
  RootStackParamList,
  "InterruptionTime"
>;
type DamagesDescriptionRouteProp = RouteProp<
  RootStackParamList,
  "DamagesDescription"
>;
type EventDetailRouteProp = RouteProp<RootStackParamList, "EventDetail">;

export {
  RootStackParamList,
  AppNavigationProp,
  InterruptionTimeRouteProp,
  DamagesDescriptionRouteProp,
  EventDetailRouteProp,
};
