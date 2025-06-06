import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { EnergyOutageEvent } from "../types";

interface EventCardProps {
  event: EnergyOutageEvent;
  onPress?: (event: EnergyOutageEvent) => void;
}

const EventCard: React.FC<EventCardProps> = ({ event, onPress }) => {
  return (
    <TouchableOpacity
      style={localStyles.card}
      onPress={() => onPress && onPress(event)}
    >
      <Text style={localStyles.locationText}>
        Localização: {event.location}
      </Text>
      <Text style={localStyles.detailText}>
        Tempo de Interrupção: {event.interruptionTime}
      </Text>
      <Text style={localStyles.dateText}>Registrado em: {event.timestamp}</Text>
      <Text style={localStyles.viewDetailsText}>
        Toque para ver detalhes...
      </Text>
    </TouchableOpacity>
  );
};

const localStyles = StyleSheet.create({
  card: {
    backgroundColor: "rgb(203, 232, 245)",
    borderRadius: 8,
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  locationText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#3A86FF"
  },
  detailText: {
    fontSize: 16,
    marginBottom: 3,
    color: "#023047"
  },
  dateText: {
    fontSize: 12,
    marginTop: 5,
    textAlign: "right",
    color: "#023047"
  },
  viewDetailsText: {
    fontSize: 14,
    color: "#3A86FF",
    marginTop: 5,
    textAlign: "center",
    textDecorationLine: "underline",
  },
});

export default EventCard;
