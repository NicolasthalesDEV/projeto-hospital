import { Text, TextInput, View, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function HomeScreen() {
  const especialidades = ['Cardiologia', 'Dermatologia', 'Ginecologia', 'Pediatria', 'Oftalmologia'];
  const consultasAgendadas = [
    { id: 1, medico: 'Dr. João Silva', especialidade: 'Cardiologia', horario: '10:00 AM' },
    { id: 2, medico: 'Dra. Ana Costa', especialidade: 'Dermatologia', horario: '2:00 PM' },
  ];

  return (
    <ScrollView style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.title}>Consultas Médicas</Text>
        <TouchableOpacity style={styles.notificationButton}>
          <Ionicons name='notification-outline' size={30} color="#4CAF50" />
        </TouchableOpacity>
      </View>

      <TextInput
        placeholder="Buscar por médicos ou especialidades"
        style={styles.searchInput}
      />

      <Text style={styles.subtitle}>Especialidades Populares</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.specialtiesContainer}>
        {especialidades.map((especialidade, index) => (
          <View key={index} style={styles.specialtyCard}>
            <Text style={styles.specialtyText}>{especialidade}</Text>
          </View>
        ))}
      </ScrollView>

      <Text style={styles.subtitle}>Minhas Consultas</Text>
      {consultasAgendadas.length === 0 ? (
        <Text style={styles.noAppointmentsText}>Você não tem consultas agendadas.</Text>
      ) : (
        consultasAgendadas.map((consulta) => (
          <View key={consulta.id} style={styles.appointmentCard}>
            <Text style={styles.appointmentText}>Médico: {consulta.medico}</Text>
            <Text style={styles.appointmentText}>Especialidade: {consulta.especialidade}</Text>
            <Text style={styles.appointmentText}>Horário: {consulta.horario}</Text>
          </View>
        ))
      )}

      <TouchableOpacity style={styles.button} onPress={() => console.log('Agendar consulta')}>
        <Text style={styles.buttonText}>Agendar Consulta</Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = {
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',
  },
  notificationButton: {
    backgroundColor: '#e1e1e1',
    borderRadius: 50,
    padding: 10,
  },
  searchInput: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    marginVertical: 15,
    fontSize: 16,
  },
  subtitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  specialtiesContainer: {
    marginBottom: 20,
  },
  specialtyCard: {
    backgroundColor: '#ffffff',
    paddingVertical: 15,
    paddingHorizontal: 25,
    marginRight: 15,
    borderRadius: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  specialtyText: {
    fontSize: 16,
    color: '#333',
  },
  noAppointmentsText: {
    fontSize: 16,
    color: '#777',
    textAlign: 'center',
    marginTop: 10,
  },
  appointmentCard: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 10,
    borderRadius: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  appointmentText: {
    fontSize: 16,
    color: '#555',
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 14,
    borderRadius: 12,
    marginTop: 25,
    alignItems: 'center',
    elevation: 3,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
};
