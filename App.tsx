import React, { useState } from "react";
import AppNavigator from "./src/Navigation/AppNavigator";
import { EnergyOutageEvent } from "./src/types/index";

export default function App() {
  const [events, setEvents] = useState<EnergyOutageEvent[]>([
    {
      id: "1",
      location: "Bairro Centro, São Paulo",
      interruptionTime: "3 horas",
      damages: "Geladeira danificada, perda de alimentos",
      timestamp: "2025-06-01 10:30",
    },
    {
      id: "2",
      location: "Zona Sul, Rio de Janeiro",
      interruptionTime: "1 dia e 4 horas",
      damages: "Comércio fechado, prejuízo de R$ 5000",
      timestamp: "2025-05-28 15:00",
    },
  ]);

  const [nearbyEvents, setNearbyEvents] = useState<EnergyOutageEvent[]>([
    {
      id: "101",
      location: "Vila Mariana, São Paulo",
      interruptionTime: "1 hora",
      damages: "Sem grandes prejuízos, energia retornou rápido.",
      timestamp: "2025-06-05 22:00",
    },
    {
      id: "102",
      location: "Pinheiros, São Paulo",
      interruptionTime: "45 minutos",
      damages: "Alguns semáforos desligados, trânsito lento.",
      timestamp: "2025-06-05 20:30",
    },
    {
      id: "103",
      location: "Liberdade, São Paulo",
      interruptionTime: "2 horas",
      damages: "Estabelecimentos comerciais afetados.",
      timestamp: "2025-06-04 18:00",
    },
  ]);

  const addEvent = (newEvent: EnergyOutageEvent) => {
    setEvents((prevEvents) => [...prevEvents, newEvent]);
  };

  return (
    <AppNavigator
      events={events}
      addEvent={addEvent}
      nearbyEvents={nearbyEvents}
    />
  );
}
