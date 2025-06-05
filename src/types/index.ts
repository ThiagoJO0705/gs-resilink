interface EnergyOutageEvent {
  id: string;
  location: string;
  interruptionTime: string; 
  damages: string; 
  timestamp: string; 
}

export {EnergyOutageEvent}