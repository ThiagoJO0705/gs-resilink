import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Header from '../Components/Header';
import { SafeAreaView } from 'react-native-safe-area-context'; // Importar SafeAreaView, se necessário para iOS
import { useNavigation } from '@react-navigation/native';
import { AppNavigationProp } from '../Navigation/types';

const RecommendationsScreen: React.FC = () => {
  const navigation = useNavigation<AppNavigationProp>();
  const recommendations = [
    "Mantenha lanternas, velas e pilhas em bom estado.",
    "Tenha um rádio à pilha para informações em caso de falta de energia.",
    "Mantenha o celular carregado.",
    "Desligue eletrodomésticos da tomada para evitar danos quando a energia voltar.",
    "Evite abrir a geladeira e o freezer constantemente para preservar os alimentos.",
    "Tenha um kit de primeiros socorros e suprimentos básicos.",
    "Em caso de cabos caídos, mantenha distância e acione a concessionária de energia.",
    "Não utilize geradores de energia em ambientes fechados.",
    "Se for usar velas, mantenha-as longe de materiais inflamáveis.",
    "Tenha um plano de comunicação familiar.",
  ];

  const handleGoBack = () => {
    navigation.goBack(); // Volta para a tela anterior (GeneralOverview)
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header
        title="Recomendações"
        showBackButton={true} // Mostrar botão de voltar
        onBackPress={handleGoBack} // Ação do botão de voltar
      />
      <ScrollView style={styles.scrollView}>
        <Text style={styles.introText}>
          Aqui estão algumas orientações preventivas e boas práticas para lidar com eventos de falta de energia causados por desastres naturais:
        </Text>
        {recommendations.map((rec, index) => (
          <View key={index} style={styles.recommendationItem}>
            <Text style={styles.bulletPoint}>•</Text>
            <Text style={styles.recommendationText}>{rec}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 16,
  },
  introText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'justify',
    lineHeight: 25,
    color: '#333',
  },
  recommendationItem: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'flex-start',
  },
  bulletPoint: {
    fontSize: 18,
    marginRight: 10,
    color: '#007AFF',
    fontWeight: 'bold',
  },
  recommendationText: {
    flex: 1,
    fontSize: 16,
    lineHeight: 22,
  },
});

export default RecommendationsScreen;