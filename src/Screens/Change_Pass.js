import React from 'react';
import {Text,Image, TouchableOpacity, View, StyleSheet, TextInput, ScrollView, Container} from 'react-native';


const ChangePass = ({navigation}) => {
  return (
    <View>
    <ScrollView showsVerticalScrollIndicator={false} >
    <View style={{height:'100%', overflow:'hidden'}}>
    <View style={styles.TopView}>
    <Image
        style={styles.LOGO}
        source={require('../Assets/LOGO.jpg')}
      />
    </View>
    <View style={styles.BottomView}>
             
      <TextInput
        style={styles.input}
        placeholder="New Password"
        keyboardType={'password'}
        placeholderTextColor="black"
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        keyboardType={'password'}
        placeholderTextColor="black"
      />
      
      <TouchableOpacity 
        onPress={() => navigation.navigate('FAQ')}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Change Password</Text>
      </TouchableOpacity>
    </View>
    </View>
 </ScrollView>
 </View>
  );
};
const styles = StyleSheet.create({

  TopView: {
    backgroundColor:'#03204c',
    height:"80%",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius:50 ,
    marginLeft:5,
    marginRight:5,
    overflow: 'hidden',
  },

  LOGO:{
    width:200,
    height:100,
    alignSelf:'center',
    marginTop:'15%',
    marginBottom:'10%'
},
  BottomView:{
      bottom:'45%',
      backgroundColor:'white',
      height:'60%',
      width:'80%',
      alignSelf:'center',
      borderRadius:25,
      padding:'10%',
      color:'black',
      marginBottom:80,
      borderBottomRightRadius:20,
      overflow: 'hidden',
  },
  input:{
      borderBottomColor: 'black',
      borderBottomWidth: 1,
      marginTop:'7%',
      marginBottom:'5%',
      padding:0,
      color:'black'
  },
    // LOGINBUTTON
  button:{
    backgroundColor:'#03204c',
    borderRadius:20,
    padding:'5%',
    marginTop:'20%',
    width:'80%',
    alignSelf:'center',
    marginBottom:'10%'
  },
  buttonText:{
    textAlign:'center',
    color:'white',
    fontWeight:'bold'
  }
 
});
export default ChangePass;