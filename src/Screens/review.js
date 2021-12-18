import React, {useState} from 'react'; 
import {View, Image, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native';


const MultiTextInput = (props) => {
  return (
    <TextInput
      {...props}
      editable
    />
  );
}

const Review=()=>{
const [text, onChangeText] = useState();
    return(
        <View style={{flex:1, marginTop:30}}>
        <View style={styles.Main_view}>
        <Text style={styles.heading}>Service Review</Text>
        <MultiTextInput
        multiline
        numberOfLines={4}
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Filler text is text that shares some characteristics of a 
        real written text, but is random or otherwise generated. 
        It may be used to display a sample of"
        placeholderTextColor ="grey"
         />  
         </View>
        <View style={styles.Main_view}>
        <Text style={styles.heading}>Employee Review</Text>
        <MultiTextInput
        multiline
        numberOfLines={4}
        style={styles.input}
        onChangeText={(text)=>onChangeText(text)}
        value={text}
        placeholder="Tell us about the employee"
        placeholderTextColor ="grey"
         />  
        </View>
        <TouchableOpacity
            style={styles.EditButton}
         onPress={()=>navigation.navigate("Edit Profile")}
         >
        <Text style={styles.EditText}>Submit Review</Text>
        </TouchableOpacity>
        </View>
    )
};

const styles=StyleSheet.create({
    headerView:{
        marginBottom:10,
        borderBottomWidth:1,
        borderBottomColor:"#D6D3D7"
    },
    text:{
        margin:10,
        marginBottom:5,
        color:"black",
        fontWeight:"bold",
        marginLeft:50
    },
    subText:{
        marginLeft:50,
        marginBottom:10
    },
    Main_view:{
        backgroundColor:"white",
        margin:10,
        marginTop:10,
        borderRadius:10,
        elevation:5,
        padding:10
    },
    headerImage:{
        width:'100%',
        height:150
    },
    heading:{
        fontWeight:'bold',
        textAlign:'center',
        marginTop:10,
        fontSize:17,
        color:'black'
    },
    input:{
        margin: 20,
        borderWidth: 2,
        borderRadius:5,
        padding:10,
        borderColor:'#EBE8EC',
        textAlignVertical: "top",
        backgroundColor:"#efefef"
    },
     EditButton:{
        margin:15,
        backgroundColor:'#03204c',
        borderRadius:20,
        width:'45%',
        alignSelf:'center',
        marginBottom:20
    },
    EditText:{
        color:'white',
        textAlign:'center',
        margin:8,
        fontWeight:'bold',
        fontSize:15
    }
})
export default Review;