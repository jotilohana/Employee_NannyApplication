import React,{useState,useRef,useEffect} from 'react';
import {Text,Image, TouchableOpacity,ScrollView, View, StyleSheet, TextInput, Button} from 'react-native';


const Login = ({navigation}) => {

  let textInput =useRef(null)
  const [Email,setEmail]=useState();
  const [focusInput, setFocusInput]=useState(true);
  const onChangeEmail =(email)=>{
    setEmail(email)
  }

  const onPressContinue=()=>{
    if(Email){
      navigation.navigate('Verify')
    }
  }
  const onChangeFocus=()=>{
    setFocusInput(true);
  }


  const onChangeBlur=()=>{
    setFocusInput(false);

  }
  useEffect(()=>{
    textInput.focus()
  },[])
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
        <Text style={styles.LoginText}>Forgot Password</Text>
        <TextInput
        ref={(Input)=>textInput=Input}
        style={styles.input}
        placeholder="Email"
        keyboardType={'email-address'}
        placeholderTextColor="black"
        value={Email}
        onChangeText={onChangeEmail}
        onFocus={onChangeFocus}
        onBlur={onChangeBlur}

      />
     
      <TouchableOpacity 
        onPress={onPressContinue}
   
        style={styles.button}
      >
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.BackTxt}>Back To Login</Text>
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
    height:"60%",
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
      marginTop:'20%'
  },
  Bottomtext:{
      color:'white',
      textAlign:'center',
      flex:1,
  },
  BottomView:{
      bottom:'30%',
      backgroundColor:'white',
      height:'45%',
      width:'80%',
      alignSelf:'center',
      borderRadius:25,
      padding:'10%',
      color:'black',
      marginBottom:'90%',
      overflow: 'hidden',
  },
  LoginText:{
      textAlign:'center',
    color:'black',
    fontWeight:'bold',
    fontSize:18,
    marginBottom:'13%'
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
    marginTop:20,
    width:'100%',
    alignSelf:'center',
  },
  buttonText:{
    textAlign:'center',
    color:'white',
    fontWeight:'bold'
  }, 

//   End back txt
BackTxt:{
    color:'black',
    fontWeight:'bold',
    alignSelf:'center',
    marginTop:15
},
});
export default Login;