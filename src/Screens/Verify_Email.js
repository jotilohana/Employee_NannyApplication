import React,{useState,useRef,useEffect} from 'react';
import {Text,KeyboardAvoidingView, Image, TouchableOpacity,ScrollView, View, StyleSheet, Button} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
const Verify = ({navigation}) => {
  
let textInput=useRef(null);
const lengthInput=4;
const [internalVal, setInternalVal]=useState("")


const onChangeText=(val)=>{
  setInternalVal(val);
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
    <Text style={styles.headerText}>Verify Email</Text>
    <KeyboardAvoidingView
    keyboardVerticalOffset={50}
    behavior={'padding'}
    >

        <Text style={styles.LoginText}>Input your code send via Email</Text>
        <View>
        <TextInput
        onChangeText={onChangeText}
        style={styles.input}
        ref={(input)=>textInput=input}
        placeholder="Enter Code"
        keyboardType={'numeric'}
        placeholderTextColor="black"
        value={internalVal}
        maxLength={lengthInput}
        returnKeyType="done"
      />
    <View style={styles.containerInput}>
     { Array(lengthInput).fill().map((data,index)=>
     (
     <View 
     key={index}
     style={styles.cellView}>
     <Text style={styles.cellText} 
     onPress={()=>textInput.focus()}>
        {internalVal && internalVal.length > 0 ? internalVal[index] : ""}
     </Text>
     </View>
     )  
     
     )}
      
      </View>
      <TouchableOpacity 
        onPress={() => navigation.navigate('Change Password')}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>

      <View style={styles.EndView}>
       <Text style={styles.Endtext}> Didn't recieve code? </Text>
       <TouchableOpacity 
        onPress={() => alert("Resend")}
      >
        <Text style={styles.Endtext}>Request Again</Text>
      </TouchableOpacity>
      </View>

      <TouchableOpacity 
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.BackTxt}>Back To Login</Text>
      </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
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
    overflow: 'hidden',
    marginLeft:5,
    marginRight:5
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
  headerText:{
    textAlign:'center',
    color:'black',
    fontWeight:'bold',
    fontSize:18,
    marginBottom:8
  },
  LoginText:{
      textAlign:'center',
    color:'black',
    fontWeight:'bold',
    fontSize:14,
    marginBottom:'5%'
  },
  input:{
      height:0,
      width:0,
  },
  containerInput:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },

  cellView:{
    paddingVertical:11,
    width:40,
    margin:5,
    justifyContent:'center',
    alignItems:'center',
    borderBottomWidth:1.5
  },
  cellText:{
    textAlign:'center',
    fontSize:16,
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
// End portion
  EndView:{
    marginTop:'4%',
    flexDirection:'row',
  },
  Endtext:{
    color:'black',
    textAlign:'center',
    fontSize:13,
    alignSelf:'center'  
  },
//   End back txt
BackTxt:{
    color:'black',
    fontWeight:'bold',
    alignSelf:'center',
    marginTop:15
},
});
export default Verify;