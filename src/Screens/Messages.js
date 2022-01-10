import React, {useState} from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native'

const MessagesScreen = ({navigation}) => {
  return (
      <View style={styles.mainView}>
        <TouchableOpacity style={styles.buttonView}
        onPress={()=>navigation.navigate('ChatScreen')}
        >
          <Text style={styles.button}>Live Chat support</Text>
        </TouchableOpacity>
      </View>      
  )
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    justifyContent:'center'
  },
  buttonView:{
    backgroundColor:"#03204c",
    width:'50%',
    borderRadius:20,
    padding:5,
  },
  button:{
    textAlign:'center',
    color:"white",
    alignContent:"center",
    alignItems:"center",
    fontWeight:'bold'
  }

})

export default MessagesScreen