import React, { useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import Header from "../Components/Header";
import InputField from "../Components/InputField";
import Button from "../Components/Button";
import {
  AppNavigationProp,
  DamagesDescriptionRouteProp,
} from "../Navigation/types";
import { EnergyOutageEvent } from "../types";

interface DamagesDescriptionProps {
  addEvent: (newEvent: EnergyOutageEvent) => void;
  navigation: AppNavigationProp;
  route: DamagesDescriptionRouteProp;
}

const DamagesDescription: React.FC<DamagesDescriptionProps> = ({
  addEvent,
  navigation,
  route,
}) => {
  const { location, interruptionTime } = route.params || {};

  const [damages, setDamages] = useState("");

  const handleRegisterEvent = () => {
    if (damages.trim() === "") {
      Alert.alert("Aviso", "Nenhum prejuízo descrito. Continuar mesmo assim?", [
        { text: "Não", style: "cancel" },
        { text: "Sim", onPress: saveEvent },
      ]);
    } else {
      saveEvent();
    }
  };

  const saveEvent = () => {
    const newEvent: EnergyOutageEvent = {
      id: String(Date.now()),
      location: location || "Não informado",
      interruptionTime: interruptionTime || "Não informado",
      damages: damages.trim() === "" ? "Nenhum prejuízo reportado." : damages,
      timestamp: new Date().toLocaleString("pt-BR"),
    };

    addEvent(newEvent);

    Alert.alert(
      "Sucesso!",
      "Evento de falta de energia registrado com sucesso!",
      [{ text: "OK", onPress: () => navigation.navigate("GeneralOverview") }]
    );
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Header
        title="Prejuízos Causados"
        showBackButton={true}
        onBackPress={handleGoBack}
      />
      <View style={styles.content}>
        <Text style={styles.instructionText}>
          Localização:{" "}
          <Text style={styles.dataHighlight}>
            {location || "Não informado"}
          </Text>
        </Text>
        <Text style={styles.instructionText}>
          Tempo de Interrupção:{" "}
          <Text style={styles.dataHighlight}>
            {interruptionTime || "Não informado"}
          </Text>
        </Text>
        <Text style={styles.instructionText}>
          Descreva os prejuízos observados na região:
        </Text>
        <InputField
          label="Descrição dos Prejuízos"
          value={damages}
          onChangeText={setDamages}
          placeholder="Ex: Residências impactadas, estabelecimentos afetados, etc."
          multiline
          numberOfLines={4}
        />
        <Button title="Registrar Evento" onPress={handleRegisterEvent} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  content: {
    flex: 1,
    padding: 16,
  },
  instructionText: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: "center",
  },
  dataHighlight: {
    fontWeight: "bold",
    color: "#007AFF",
  },
});

export default DamagesDescription;
