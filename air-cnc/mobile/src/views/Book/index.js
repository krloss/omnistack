import React,{useState} from 'react';
import { Alert,AsyncStorage,SafeAreaView,Text,TextInput,TouchableOpacity } from 'react-native';

import api from '../../services/api';

import styles from './styles';

export default function Book({navigation}) {
  const [date,setDate] = useState('');
  const id = navigation.getParam('id');

  async function handleSubmit() {
    const user_id = await AsyncStorage.getItem('user');
    const response = await api.post(`/spots/${id}/bookings`,{date},{
      headers: {user_id}
    });

    Alert.alert(`Solicitação de Reserva: ${response.data._id}`);
    navigation.navigate('List');
  }

  function handleCancel() {
    navigation.navigate('List');
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text styles={styles.label}>DATA DE INTERESSE *</Text>
        <TextInput
          style={styles.input}
          placeholder="Qual data você quer reservar?"
          placeholderTextColor="#999"
          autoCapitalize="words"
          autoCorrect={false}
          value={date}
          onChangeText={setDate}
        />

      <TouchableOpacity onPress={handleSubmit} style={styles.button}>
        <Text style={styles.buttonText}>Solicitar Reserva</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleCancel} style={[styles.button,styles.cancelButton]}>
        <Text style={styles.buttonText}>Cancelar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
