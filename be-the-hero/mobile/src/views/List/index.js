import React,{useEffect,useState} from 'react'
import {Image,Text,View} from 'react-native'

import Incidents from '../../components/Incidents'
import api from '../../services/api'

import styles from './styles'
import logo from '../../assets/logo.png'

export default function List({navigation}) {
  const [total,setTotal] = useState(0)
  const [list,setList] = useState([])
  const [page,setPage] = useState(0)
  const [loading,setLoading] = useState(false)

  function navigateToDetail(item) {
    navigation.navigate('Detail',{item})
  }

  async function loadList() {
    if(loading) return
    if(total && total === list.length) return

    setLoading(true)

    const response = await api.get('incidents',{params:{page}})

    setTotal(response.headers['x-total-count'])
    setPage(page + 1)
    setList([...list,...response.data])
    setLoading(false)
  }

  useEffect(() => {loadList()},[])

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} />
        <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}>{total} casos</Text>.
        </Text>
      </View>

      <Text style={styles.title}>Bem vindo!</Text>
      <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia.</Text>
      
      <Incidents incidents={list} onEndReached={loadList} onPress={navigateToDetail} />
    </View>
  )
}
