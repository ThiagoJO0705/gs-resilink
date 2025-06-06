import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Header from "../Components/Header";
import InputField from "../Components/InputField";
import Button from "../Components/Button";
import { AppNavigationProp } from "../Navigation/types";
import { EnergyOutageEvent } from "../types";

interface AffectedLocationProps {
  nearbyEvents: EnergyOutageEvent[];
  navigation: AppNavigationProp;
  route: any;
}

const AffectedLocation: React.FC<AffectedLocationProps> = ({
  nearbyEvents,
  navigation,
}) => {
  const [location, setLocation] = useState("");

  const handleNext = () => {
    if (location.trim() === "") {
      Alert.alert("Erro", "Por favor, informe a localização atingida.");
      return;
    }
    navigation.navigate("InterruptionTime", { location });
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleViewNearbyEventDetails = (event: EnergyOutageEvent) => {
    navigation.navigate("EventDetail", { event });
  };

  return (
    <View style={styles.container}>
      <Header
        title="Localização Atingida"
        showBackButton={true}
        onBackPress={handleGoBack}
      />
      <ScrollView style={styles.scrollViewContent}>
        <View style={styles.section}>
          <Text style={styles.instructionText}>
            Informe a região impactada pela falta de energia (bairro, cidade ou
            CEP):
          </Text>
          <InputField
            label="Localização"
            value={location}
            onChangeText={setLocation}
            placeholder="Ex: Centro, São Paulo, 01000-000"
          />
          <Button title="Avançar" onPress={handleNext} />
        </View>

        {nearbyEvents.length > 0 && (
          <View style={styles.nearbyLocationsSection}>
            <Text style={styles.nearbyTitle}>Próximas de Mim:</Text>
            {nearbyEvents.map((event) => (
              <TouchableOpacity
                key={event.id}
                style={styles.nearbyCard}
                onPress={() => handleViewNearbyEventDetails(event)}
              >
                <Text style={styles.nearbyLocation}>{event.location}</Text>
                <Text style={styles.nearbyTime}>
                  Interrupção: {event.interruptionTime}
                </Text>
                <Text style={styles.nearbyDetailsLink}>Ver Detalhes</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  scrollViewContent: {
    flexGrow: 1,
    padding: 16,
  },
  section: {
    marginBottom: 30,
  },
  instructionText: {
    fontSize: 16,
    marginBottom: 15,
    textAlign: "center",
  },
  nearbyLocationsSection: {
    marginTop: 20,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  nearbyTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
    color: "#333",
  },
  nearbyCard: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 15,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 3,
  },
  nearbyLocation: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#007AFF",
  },
  nearbyTime: {
    fontSize: 14,
    color: "#555",
    marginTop: 5,
  },
  nearbyDetailsLink: {
    fontSize: 12,
    color: "#007AFF",
    marginTop: 10,
    textAlign: "right",
    textDecorationLine: "underline",
  },
});
export default AffectedLocation;
