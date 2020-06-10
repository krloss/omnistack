import React,{useEffect,useState} from 'react';
import { Alert,AsyncStorage,Image,SafeAreaView,ScrollView } from 'react-native';

import socketIOC from '../../services/socket';

import styles from './styles';
import SpotList from '../../components/SpotList';

import logo from '../../assets/logo.png';

export default function List() {
  const [techs,setTechs] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem('user').then(user_id => {
      const sioc = socketIOC({user_id});
      
      sioc.on('booking_save', it => {
        Alert.alert(`Sua reserva em ${it.spot.company} em ${it.date} foi ${it.approved ? 'APROVADA' : 'REJEITADA'}.`);
      });
    });
  },[]);

  useEffect(() => {
    AsyncStorage.getItem('techs').then(sotoragedTechs => {
      const techsArray = sotoragedTechs.split(',').map(it => it.trim());
      
      setTechs(techsArray);
    });
  },[]);

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={logo} />
      
      <ScrollView>
        {techs.map(it => <SpotList key={it} tech={it} />)}
      </ScrollView>
    </SafeAreaView>
  );
}
