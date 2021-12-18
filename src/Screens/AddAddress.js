import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity, Image} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Map from './Map';

const AddAddress=()=>{
    const [text, setText] =useState("Filler text is text that shares some characteristics of a real written text, but is random");
    const [toggleCheckBoxH, setToggleCheckBoxH] = useState(false)
    const [toggleCheckBoxO, setToggleCheckBoxO] = useState(false)
    const [toggleCheckBoxOther, setToggleCheckBoxOther] = useState(false)
    return(
        <View style={{backgroundColor:"white", borderRadius:10, flex:1}}>
            <View style={{width:"100%", height:"55%", resizeMode: 'cover', }}>
            <Map />
            </View>
        <View style={{margin:20}}>
        <TextInput
        multiline
        numberOfLines={4}
        style={styles.input}
        value={text}
        onChangeText={setText}
        placeholder="Add Address"
        placeholderTextColor="black"
      />
      <View style={{flexDirection:'row', justifyContent:"center",}}>
        <View style={styles.box}>
        <CheckBox
          tintColors={{true: '#03204c'}}
        value={toggleCheckBoxH}
        onValueChange={(newValue) => setToggleCheckBoxH(newValue)}
         />
         <Text>Home</Text>
         </View>
         <View  style={styles.box}>
        <CheckBox
          tintColors={{true: '#03204c'}}
        disabled={false}
        value={toggleCheckBoxO}
        onValueChange={(newValue) => setToggleCheckBoxO(newValue)}
         />
        <Text>Office</Text>
         </View>
         <View style={styles.box}>
        <CheckBox
          tintColors={{true: '#03204c'}}
        disabled={false}
        value={toggleCheckBoxOther}
        onValueChange={(newValue) => setToggleCheckBoxOther(newValue)}
         />
        <Text>Other</Text>
         </View>
         </View>
         <TouchableOpacity
            style={styles.btn}
             onPress={()=>navigation.navigate("Change address")}
            >
            <Text style={styles.btntext}>Save Address</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}
const styles=StyleSheet.create({
    input:{
        borderWidth:1,
        margin:20,
        paddingLeft:10,
        textAlignVertical: "top",
        borderRadius:5,
    },
    box:{
        flexDirection:"row",
        margin:10,
        alignItems:'center'
    },
    btn:{
        backgroundColor:"#03204c",
        width:'40%',
        alignSelf:"center",
        borderRadius:20,
        padding:6,
        marginBottom:20,
        marginLeft:'auto',
        marginRight:20,
        marginTop:20
    },
    btntext:{
        color:'white',
        textAlign:'center',
    }
})

export default AddAddress;