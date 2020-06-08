import React,{useEffect,useState} from 'react';
import { AsyncStorage,Image,KeyboardAvoidingView,Platform,Text,TextInput,TouchableOpacity,View } from 'react-native';

import api from '../../services/api';
import styles from './styles';

import logo from '../../assets/logo.png';

export default function Login({navigation}) {
  const [email,setEmail] = useState('');
  const [techs,setTechs] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('user').then(user => {
      if(user) navigation.navigate('List');
    });
  },[]);

  async function handleSubmit() {
    const response = await api.post('/sessions',{email});
    const {_id} = response.data;

    await AsyncStorage.setItem('user',_id);
    await AsyncStorage.setItem('techs',techs);

    navigation.navigate('List');
  }

  return (
    <KeyboardAvoidingView enabled={Platform.OS === 'ios'} behavior="padding" style={styles.container}>
      <Image source={logo} />
      
      <View style={styles.form}>
        <Text styles={styles.label}>SEU E-MAIL *</Text>
        <TextInput
          style={styles.input}
          placeholder="Seu e-mail"
          placeholderTextColor="#999"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          value={email}
          onChangeText={setEmail}
        />

        <Text styles={styles.label}>TECNOLOGIAS *</Text>
        <TextInput
          style={styles.input}
          placeholder="Tecnologias de interesse"
          placeholderTextColor="#999"
          autoCapitalize="words"
          autoCorrect={false}
          value={techs}
          onChangeText={setTechs}
        />
      </View>

      <TouchableOpacity onPress={handleSubmit} style={styles.button}>
        <Text style={styles.buttonText}>Encontrar Spots</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}
