import React, { useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import Header from "../Components/Header";
import InputField from "../Components/InputField";
import Button from "../Components/Button";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  AppNavigationProp,
  InterruptionTimeRouteProp,
} from "../Navigation/types";

const InterruptionTime: React.FC = () => {
  const navigation = useNavigation<AppNavigationProp>();
  const route = useRoute<InterruptionTimeRouteProp>();
  const { location } = route.params || {};

  const [interruptionTime, setInterruptionTime] = useState("");

  const handleNext = () => {
    if (interruptionTime.trim() === "") {
      Alert.alert("Erro", "Por favor, informe o tempo de interrupção.");
      return;
    }
    navigation.navigate("DamagesDescription", { location, interruptionTime });
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Header
        title="Tempo de Interrupção"
        showBackButton={true}
        onBackPress={handleGoBack}
      />
      <View style={styles.content}>
        <Text style={styles.instructionText}>
          Localização atual:{" "}
          <Text style={styles.locationHighlight}>
            {location || "Não informado"}
          </Text>
        </Text>
        <Text style={styles.instructionText}>
          Informe o tempo estimado ou real que a região ficou sem energia:
        </Text>
        <InputField
          label="Tempo de Interrupção"
          value={interruptionTime}
          onChangeText={setInterruptionTime}
          placeholder="Ex: 2 horas, 1 dia, Estimado 4 horas"
        />
        <Button title="Avançar" onPress={handleNext} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(132, 210, 236)",
  },
  content: {
    flex: 1,
    padding: 16,
  },
  instructionText: {
    fontSize: 16,
    marginBottom: 15,
    textAlign: "center",
  },
  locationHighlight: {
    fontWeight: "bold",
    color: "#007AFF",
  },
});

export default InterruptionTime;
