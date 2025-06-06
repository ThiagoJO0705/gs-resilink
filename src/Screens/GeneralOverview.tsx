import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  RefreshControl,
} from "react-native";
import Header from "../Components/Header";
import EventCard from "../Components/EventCard";
import Button from "../Components/Button";
import { AppNavigationProp } from "../Navigation/types";
import { EnergyOutageEvent } from "../types";

interface GeneralOverviewProps {
  events: EnergyOutageEvent[];
  navigation: AppNavigationProp;
  route: any;
}

const GeneralOverview: React.FC<GeneralOverviewProps> = ({
  events,
  navigation,
}) => {
  const handleAddEvent = () => {
    navigation.navigate("AffectedLocation");
  };

  const handleViewEventDetails = (event: EnergyOutageEvent) => {
    navigation.navigate("EventDetail", { event });
  };

  const [isRefreshing, setIsRefreshing] = useState(false);
  const onRefresh = React.useCallback(() => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Header title="Resilink - Panorama Geral" />
      <ScrollView
        style={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
        }
      >
        <Text style={styles.sectionTitle}>Eventos de Falta de Energia:</Text>
        {events.length === 0 ? (
          <Text style={styles.noEventsText}>
            Nenhum evento registrado ainda.
          </Text>
        ) : (
          events.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              onPress={handleViewEventDetails}
            />
          ))
        )}
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Button title="Registrar Novo Evento" onPress={handleAddEvent} />
        <Button
          title="Ver Recomendações"
          onPress={() => navigation.navigate("Recommendations")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(132, 210, 236)"
  },
  scrollView: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 16,
    color: "#023047",
  },
  noEventsText: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
    color: "#666",
  },
  buttonContainer: {
    padding: 16,
    borderTopWidth: 1,
    backgroundColor: "rgb(203, 232, 245)",
    borderColor: "white"
  },
});

export default GeneralOverview;
