import React from 'react'
import {Image,Linking,Text,TouchableOpacity,View} from 'react-native'
import {useNavigation,useRoute} from '@react-navigation/native'
import {Feather} from '@expo/vector-icons'
import * as MailComposer from 'expo-mail-composer'

import formats from '../../config/formats'

import styles from './styles'
import logo from '../../assets/logo.png'

export default function Detail() {
  const navigation = useNavigation()
  const route = useRoute()
  const item = route.params.item
  const message = (
    `Olá ${item.ngo_name},\nestou entrando em contato pois gostaria de ajudar no caso `+
    `"${item.title}" com o valor de ${formats.currency(item.value)}.`
  )

  function sendWhatsApp() {
    Linking.openURL(`whatsapp://send?phone=${item.ngo_phone}&text=${message}`)
  }
  function sendEmail() {
    MailComposer.composeAsync({
      subject:`[BeTheHero] Herói do caso: ${item.title}`,
      recipients:[item.ngo_email],
      body:message
    })
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} />

        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={28} color="#E02041" />
        </TouchableOpacity>
      </View>

      <View style={styles.item}>
          <View style={styles.itemHeader}>
            <View>
              <Text style={[styles.property, {marginTop:0}]}>CASO:</Text>
              <Text style={styles.value}>{item.title}</Text>
            </View>
            <View>
              <Text style={[styles.property, {marginTop:0}]}>ONG:</Text>
              <Text style={styles.value}>{item.ngo_name}</Text>
            </View>
          </View>

          <Text style={styles.property}>DESCRIÇÃO:</Text>
          <Text style={styles.value}>{item.description}</Text>

          <Text style={styles.property}>VALOR:</Text>
          <Text style={styles.value}>{formats.currency(item.value)}</Text>
        </View>

        <View style={styles.contact}>
          <Text style={styles.title}>Salve o dia!</Text>
          <Text style={styles.title}>Seja o herói deste caso.</Text>
          <Text style={styles.description}>Entre em contato:</Text>

          <View style={styles.actions}>
            <TouchableOpacity style={styles.button} onPress={sendWhatsApp}>
              <Text style={styles.buttonText}>WhatsApp</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={sendEmail}>
              <Text style={styles.buttonText}>E-mail</Text>
            </TouchableOpacity>
          </View>
        </View>
    </View>
  )
}
