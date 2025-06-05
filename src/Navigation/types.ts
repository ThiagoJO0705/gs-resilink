
import { EnergyOutageEvent } from '../types'; 
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';

type RootStackParamList = {
  GeneralOverview: undefined;
  AffectedLocation: undefined; 
  InterruptionTime: { eventId?: string, location?: string }; 
  DamagesDescription: { eventId?: string, location?: string, interruptionTime?: string };
  Recommendations: undefined;
  RegisterEvent: { event?: EnergyOutageEvent };
};

type AppNavigationProp = NativeStackNavigationProp<RootStackParamList>;

type InterruptionTimeRouteProp = RouteProp<RootStackParamList, 'InterruptionTime'>;

type DamagesDescriptionRouteProp = RouteProp<RootStackParamList, 'DamagesDescription'>;

export {DamagesDescriptionRouteProp, InterruptionTimeRouteProp, AppNavigationProp, RootStackParamList}