import React from 'react';
import {Text,Image, TouchableOpacity, View, StyleSheet, TextInput, ScrollView, Container} from 'react-native';


const SignUp = ({navigation}) => {
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
        <Text style={styles.LoginText}>Sign-Up</Text>
        <TextInput
        style={styles.input}
        placeholder="Your Name"
        placeholderTextColor="black"

      />
        <TextInput
        style={styles.input}
        placeholder="E-mail"
        keyboardType={'email-address'}
        placeholderTextColor="black"

      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        keyboardType={'password'}
        placeholderTextColor="black"
        secureTextEntry={true}

      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        keyboardType={'password'}
        placeholderTextColor="black"
        secureTextEntry={true}

      />
      
      <TouchableOpacity 
        onPress={() => navigation.navigate('Home')}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Sign-Up</Text>
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
    marginTop:'7%'
},

  line:{
      width:200,
      backgroundColor:'white',
      height:1,
      margin:'auto',
      alignSelf:'center',
  },
  Bottomtext:{
      color:'white',
      textAlign:'center',
      flex:1,
  },
  BottomView:{
      bottom:'50%',
      backgroundColor:'white',
      height:'70%',
      width:'80%',
      alignSelf:'center',
      borderRadius:25,
      padding:'10%',
      color:'black',
      marginBottom:50,
      borderBottomRightRadius:20,
      overflow: 'hidden',
  },
  LoginText:{
      textAlign:'center',
    color:'black',
    fontWeight:'bold',
    fontSize:18
  },
  input:{
      borderBottomColor: 'black',
      borderBottomWidth: 1,
      marginTop:'7%',
      marginBottom:'5%',
      padding:0,
      color:'black'
  },
  forgotPass:{
    marginTop:'2%',
    color:'black',
    textAlign:'right'
  },

  // LOGINBUTTON
  button:{
    backgroundColor:'#03204c',
    borderRadius:20,
    padding:'5%',
    marginTop:20,
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
export default SignUp;