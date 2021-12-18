import React from 'react';
import {Text,Image, TouchableOpacity,ScrollView, View, StyleSheet, TextInput, Button} from 'react-native';

const Thankyou = ({navigation}, props) => {
  return (
    <View style={{backgroundColor:'white', flex:1, justifyContent:"center" }}>
               
        <View style={styles.bottom}>
            <Image
            style={styles.thnkuhLOGO}
            source={require('../Assets/Tick.png')}
        />
            <Text style={styles.bottomText}>Thankyou</Text>
            <Text style={styles.Subbottomtext}>We have received your response</Text>
        <TouchableOpacity 
        onPress={() => navigation.navigate('MainService')}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Check Orders</Text>
      </TouchableOpacity>
        </View>
    </View>
  );
};
const styles = StyleSheet.create({
 
  bottom:{
      backgroundColor:'white',
      height:350,
      width:'80%',
      alignItems:'center',
      alignSelf:'center',
      borderRadius:20,
      padding:20,
      marginTop:100
  },
  bottomText:{
      color:'#03204c',
      fontSize:25,
      marginTop:10,
      marginBottom:10
  },
  // LOGINBUTTON
  button:{
    backgroundColor:'#03204c',
    borderRadius:20,
    padding:'3%',
    marginTop:30,
    width:'70%',
    alignSelf:'center',
  },
  buttonText:{
    textAlign:'center',
    color:'white',
    fontWeight:'bold',
    fontSize:16
  },
  
});
export default Thankyou;