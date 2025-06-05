import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Para o ícone de voltar, se estiver usando Expo. Se não, use outro ícone.

interface HeaderProps {
  title: string;
  showBackButton?: boolean; // Nova prop
  onBackPress?: () => void; // Nova prop
}

const Header: React.FC<HeaderProps> = ({ title, showBackButton = false, onBackPress }) => {
  return (
    <View style={localStyles.headerContainer}>
      <StatusBar
        animated={true}
        backgroundColor="#4444ff" // Cor de exemplo do Header
        barStyle="light-content" // Para texto branco no cabeçalho azul
        hidden={false}
      />
      {showBackButton && (
        <TouchableOpacity style={localStyles.backButton} onPress={onBackPress}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
      )}
      <Text style={localStyles.headerTitle}>{title}</Text>
      {/* Espaço para alinhar o título ao centro se houver botão de voltar */}
      {showBackButton && <View style={localStyles.backButtonPlaceholder} />}
    </View>
  );
};

const localStyles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#4444ff',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'space-between', // Para distribuir os itens
    flexDirection: 'row', // Para alinhar horizontalmente
    paddingTop: StatusBar.currentHeight || 20,
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1, // Faz o título ocupar o máximo de espaço possível
    textAlign: 'center', // Centraliza o texto
  },
  backButton: {
    padding: 5,
    marginRight: 10, // Espaçamento entre o botão e o título
  },
  backButtonPlaceholder: {
    width: 34, // Largura similar ao backButton para centralizar o título
  }
});

export default Header;