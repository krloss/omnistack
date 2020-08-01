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
  item: {
    padding:24,
    borderRadius:8,
    backgroundColor:'#FFF',
    marginBottom:16,
    marginTop:24
  },
  itemHeader:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  property:{
    fontSize:14,
    color:'#41414D',
    fontWeight:'bold',
    marginTop:24
  },
  value:{
    marginTop:8,
    fontSize:15,
    color:'#737380'
  },
  contact:{
    padding:24,
    borderRadius:8,
    backgroundColor:'#FFF',
    marginBottom:16
  },
  title:{
    fontWeight:'bold',
    fontSize:20,
    color:'#13131A',
    lineHeight:30
  },
  description:{
    fontSize:15,
    color:'#737380',
    marginTop:16
  },
  actions:{
    marginTop:16,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  button:{
    backgroundColor:'#E02041',
    borderRadius:8,
    height:50,
    width:'48%',
    justifyContent:'center',
    alignItems:'center'
  },
  buttonText:{
    color:'#FFF',
    fontSize:15,
    fontWeight:'bold'
  }
})

export default styles
