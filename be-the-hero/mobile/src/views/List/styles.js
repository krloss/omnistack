import {StyleSheet} from 'react-native'
import Constants from 'expo-constants'

const styles = StyleSheet.create({
    container:{
      flex:1,
      paddingHorizontal:24,
      paddingTop:Constants.statusBarHeight + 20
    },
    header:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center'
    },
    headerText:{
      fontSize:15,
      color:'#737380'
    },
    headerTextBold:{
      fontWeight:'bold'
    },
    title:{
      fontSize:30,
      marginBottom:16,
      marginTop:48,
      color:'#13131A',
      fontWeight:'bold'
    },
    description:{
      fontSize:16,
      lineHeight:24,
      color:'#737380',
      marginBottom:32
    }
})

export default styles
