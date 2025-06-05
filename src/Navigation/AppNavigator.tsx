import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';
import { EnergyOutageEvent } from '../types'; // Importar o tipo

// Importar as telas
import GeneralOverview from '../Screens/GeneralOverview';
import AffectedLocation from '../Screens/AffectedLocation';
import InterruptionTime from '../Screens/InterruptionTime';
import DamagesDescription from '../Screens/DamagesDescription';
import Recommendations from '../Screens/Recommendations';

const Stack = createNativeStackNavigator<RootStackParamList>();

interface AppNavigatorProps {
  events: EnergyOutageEvent[];
  addEvent: (newEvent: EnergyOutageEvent) => void;
}

const AppNavigator: React.FC<AppNavigatorProps> = ({ events, addEvent }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="GeneralOverview">
        <Stack.Screen
          name="GeneralOverview"
          options={{ headerShown: false }}
        >
          {/* Passa as props para a tela GeneralOverview */}
          {(props) => <GeneralOverview {...props} events={events} />}
        </Stack.Screen>

        <Stack.Screen
          name="AffectedLocation"
          component={AffectedLocation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="InterruptionTime"
          component={InterruptionTime}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DamagesDescription"
          options={{ headerShown: false }}
        >
          {/* Passa a função addEvent para a tela DamagesDescription */}
          {(props) => <DamagesDescription {...props} addEvent={addEvent} />}
        </Stack.Screen>

        <Stack.Screen
          name="Recommendations"
          component={Recommendations}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;