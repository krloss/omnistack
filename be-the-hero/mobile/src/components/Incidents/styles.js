import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    item: {
      padding:24,
      borderRadius:8,
      backgroundColor:'#FFF',
      marginBottom:16
    },
    itemHeader:{
      flexDirection:'row',
      justifyContent:'space-between'
    },
    property:{
      fontSize:14,
      color:'#41414D',
      fontWeight:'bold'
    },
    value:{
      marginTop:8,
      fontSize:15,
      marginBottom:24,
      color:'#737380'
    },
    hr:{
      backgroundColor:'#EEE',
      height:1,
      marginBottom:24,
      marginHorizontal:-24
    },
    button:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center'
    },
    buttonText:{
      color:'#E02041',
      fontSize:15,
      fontWeight:'bold'
    }
})

export default styles
