import React, { useState } from 'react';
import AppNavigator from './src/Navigation/AppNavigator';
import { EnergyOutageEvent } from './src/types/index'; // Importar o tipo

export default function App() {
  // Estado centralizado para armazenar os eventos
  const [events, setEvents] = useState<EnergyOutageEvent[]>([
    {
      id: '1',
      location: 'Bairro Centro, São Paulo',
      interruptionTime: '3 horas',
      damages: 'Geladeira danificada, perda de alimentos',
      timestamp: '2025-06-01 10:30',
    },
    {
      id: '2',
      location: 'Zona Sul, Rio de Janeiro',
      interruptionTime: '1 dia e 4 horas',
      damages: 'Comércio fechado, prejuízo de R$ 5000',
      timestamp: '2025-05-28 15:00',
    },
  ]);

  // Função para adicionar um novo evento
  const addEvent = (newEvent: EnergyOutageEvent) => {
    setEvents((prevEvents) => [...prevEvents, newEvent]);
  };

  return (
    // Passa a lista de eventos e a função addEvent para o AppNavigator
    <AppNavigator events={events} addEvent={addEvent} />
  );
}