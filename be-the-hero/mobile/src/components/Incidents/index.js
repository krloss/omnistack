import React from 'react'
import {FlatList,Text,TouchableOpacity,View} from 'react-native'
import {Feather} from '@expo/vector-icons'

import formats from '../../config/formats'

import styles from './styles'

export default function Incidents({incidents,onEndReached,onPress}) {
  return (
    <FlatList data={incidents}
      keyExtractor={it => String(it.id)}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.2}
      renderItem={({item:it}) => (
        <View style={styles.item}>
          <View style={styles.itemHeader}>
            <View>
              <Text style={styles.property}>CASO:</Text>
              <Text style={styles.value}>{it.title}</Text>
            </View>
            <View>
              <Text style={styles.property}>ONG:</Text>
              <Text style={styles.value}>{it.ngo_name}</Text>
            </View>
          </View>

          <Text style={styles.property}>VALOR:</Text>
          <Text style={styles.value}>{formats.currency(it.value)}</Text>

          <View style={styles.hr} />
          <TouchableOpacity style={styles.button} onPress={() => onPress(it)}>
            <Text style={styles.buttonText}>Ver mais detalhes</Text>
            <Feather name="arrow-right" size={16} color="#E02041" />
          </TouchableOpacity>
        </View>
      )}
    />
  )
}
