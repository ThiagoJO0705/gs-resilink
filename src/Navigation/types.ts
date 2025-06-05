
import { NavigatorScreenParams, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { EnergyOutageEvent } from '../types';

export type RootStackParamList = {
  GeneralOverview: undefined;
  AffectedLocation: undefined;
  InterruptionTime: { location: string };
  DamagesDescription: { location: string; interruptionTime: string };
  Recommendations: undefined;
  EventDetail: { event: EnergyOutageEvent }; // <-- NOVA ROTA para detalhes do evento
};

// Tipagem para o hook useNavigation
export type AppNavigationProp = NativeStackNavigationProp<RootStackParamList>;

// Tipagem para o hook useRoute
export type InterruptionTimeRouteProp = RouteProp<RootStackParamList, 'InterruptionTime'>;
export type DamagesDescriptionRouteProp = RouteProp<RootStackParamList, 'DamagesDescription'>;
export type EventDetailRouteProp = RouteProp<RootStackParamList, 'EventDetail'>; // <-- NOVA TIPAGEM para route da tela de detalhe