import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Header from "../Components/Header";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AppNavigationProp, EventDetailRouteProp } from "../Navigation/types";

const EventDetail: React.FC = () => {
  const navigation = useNavigation<AppNavigationProp>();
  const route = useRoute<EventDetailRouteProp>();
  const { event } = route.params;

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Header
        title="Detalhes do Evento"
        showBackButton={true}
        onBackPress={handleGoBack}
      />
      <ScrollView style={styles.scrollView}>
        <View style={styles.detailCard}>
          <Text style={styles.label}>ID do Evento:</Text>
          <Text style={styles.value}>{event.id}</Text>

          <Text style={styles.label}>Localização Atingida:</Text>
          <Text style={styles.value}>{event.location}</Text>

          <Text style={styles.label}>Tempo de Interrupção:</Text>
          <Text style={styles.value}>{event.interruptionTime}</Text>

          <Text style={styles.label}>Prejuízos Causados:</Text>
          <Text style={styles.value}>
            {event.damages || "Não especificado"}
          </Text>

          <Text style={styles.label}>Data e Hora do Registro:</Text>
          <Text style={styles.value}>{event.timestamp}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(132, 210, 236)",
  },
  scrollView: {
    padding: 16,
  },
  detailCard: {
    backgroundColor: "rgb(203, 232, 245)",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
    color: "#3A86FF",
  },
  value: {
    fontSize: 18,
    marginBottom: 10,
    color: "#333",
  },
});

export default EventDetail;
