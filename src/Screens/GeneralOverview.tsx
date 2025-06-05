import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, RefreshControl } from 'react-native';
import Header from '../Components/Header';
import EventCard from '../Components/EventCard';
import Button from '../Components/Button';
import { AppNavigationProp } from '../Navigation/types';
import { EnergyOutageEvent } from '../types';

interface GeneralOverviewProps {
  events: EnergyOutageEvent[]; // Recebe a lista de eventos como prop
  // Adicionar navigation e route props que são injetadas pelo Stack.Screen
  navigation: AppNavigationProp;
  route: any; // Type 'any' for simplicity as route isn't used directly here
}

const GeneralOverview: React.FC<GeneralOverviewProps> = ({ events, navigation }) => {
  const handleAddEvent = () => {
    navigation.navigate('AffectedLocation');
  };

  const [isRefreshing, setIsRefreshing] = useState(false);
  const onRefresh = React.useCallback(() => {
    setIsRefreshing(true);
    // Em um app real, aqui você recarregaria os dados do armazenamento
    // Por enquanto, apenas simula um tempo de carregamento
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
          <Text style={styles.noEventsText}>Nenhum evento registrado ainda.</Text>
        ) : (
          // Mapeia e exibe os eventos recebidos via props
          events.map((event) => (
            <EventCard key={event.id} event={event} onPress={() => { /* Navegar para detalhes do evento se necessário */ }} />
          ))
        )}
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Button title="Registrar Novo Evento" onPress={handleAddEvent} />
        <Button title="Ver Recomendações" onPress={() => navigation.navigate('Recommendations')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  scrollView: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 16,
    color: '#333',
  },
  noEventsText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: '#666',
  },
  buttonContainer: {
    padding: 16,
    borderTopWidth: 1,
    borderColor: '#eee',
    backgroundColor: 'white',
  }
});

export default GeneralOverview;