import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import Header from '../Components/Header';
import InputField from '../Components/InputField';
import Button from '../Components/Button';
import { useNavigation } from '@react-navigation/native';
import { AppNavigationProp } from '../Navigation/types';

const AffectedLocation: React.FC = () => {
  const navigation = useNavigation<AppNavigationProp>();
  const [location, setLocation] = useState('');

  const handleNext = () => {
    if (location.trim() === '') {
      Alert.alert('Erro', 'Por favor, informe a localização atingida.');
      return;
    }
    // Navega para a próxima tela, passando a localização como parâmetro
    navigation.navigate('InterruptionTime', { location });
  };

  const handleGoBack = () => {
    navigation.goBack(); // Volta para a tela anterior (GeneralOverview)
  };

  return (
    <View style={styles.container}>
      <Header
        title="Localização Atingida"
        showBackButton={true} // Mostrar botão de voltar
        onBackPress={handleGoBack} // Ação do botão de voltar
      />
      <View style={styles.content}>
        <Text style={styles.instructionText}>
          Informe a região impactada pela falta de energia (bairro, cidade ou CEP):
        </Text>
        <InputField
          label="Localização"
          value={location}
          onChangeText={setLocation}
          placeholder="Ex: Centro, São Paulo, 01000-000"
        />
        <Button title="Avançar" onPress={handleNext} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  instructionText: {
    fontSize: 16,
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default AffectedLocation;