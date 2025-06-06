import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';
import { EnergyOutageEvent } from '../types';

// Importar as telas
import GeneralOverview from '../Screens/GeneralOverview';
import AffectedLocation from '../Screens/AffectedLocation';
import InterruptionTime from '../Screens/InterruptionTime';
import DamagesDescription from '../Screens/DamagesDescription';
import Recommendations from '../Screens/Recommendations';
import EventDetail from '../Screens/EventDetail'; // <-- IMPORTAR NOVA TELA

const Stack = createNativeStackNavigator<RootStackParamList>();

interface AppNavigatorProps {
  events: EnergyOutageEvent[];
  addEvent: (newEvent: EnergyOutageEvent) => void;
  nearbyEvents: EnergyOutageEvent[];
}

const AppNavigator: React.FC<AppNavigatorProps> = ({ events, addEvent, nearbyEvents }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="GeneralOverview">
        <Stack.Screen
          name="GeneralOverview"
          options={{ headerShown: false }}
        >
          {(props) => <GeneralOverview {...props} events={events} />}
        </Stack.Screen>

        <Stack.Screen
          name="AffectedLocation"
          options={{ headerShown: false }}
        >
          {/* Passa os nearbyEvents para a AffectedLocationScreen */}
          {(props) => <AffectedLocation {...props} nearbyEvents={nearbyEvents} />}
        </Stack.Screen>
        <Stack.Screen
          name="InterruptionTime"
          component={InterruptionTime}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DamagesDescription"
          options={{ headerShown: false }}
        >
          {(props) => <DamagesDescription {...props} addEvent={addEvent} />}
        </Stack.Screen>

        <Stack.Screen
          name="Recommendations"
          component={Recommendations}
          options={{ headerShown: false }}
        />

        <Stack.Screen // <-- ADICIONAR NOVA TELA AO STACK
          name="EventDetail"
          component={EventDetail}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;