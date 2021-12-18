import React,{useState} from 'react';
import {View, TextInput, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const UpdatePass=()=>{
    const [textC, onChangeTextC] = useState();
    const [textN, onChangeTextN] = useState();
    const [textCN, onChangeTextCN] = useState();

    return(
        <View style={styles.mainView}>
            <View style={styles.InputFieldView}>
                <Image
                style={styles.InputIcon}
                source={require('../Assets/password.png')}
                />
                <View style={styles.inputTextView}>
                {/* <Text style={styles.inputText}>Current Password</Text> */}
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeTextC}
                    value={textC}
                    placeholder="Current Password"
                    placeholderTextColor ="grey"
                />   
                </View>
            </View>        

             <View style={styles.InputFieldView}>
                <Image
                style={styles.InputIcon}
                source={require('../Assets/password.png')}
                />
                <View style={styles.inputTextView}>
                {/* <Text style={styles.inputText}>New Password</Text> */}
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeTextN}
                    value={textN}
                    placeholder="New Password"
                    placeholderTextColor ="grey"
                />   
                </View>
            </View>        

             <View style={styles.InputFieldView}>
                <Image
                style={styles.InputIcon}
                source={require('../Assets/password.png')}
                />
                <View style={styles.inputTextView}>
                {/* <Text style={styles.inputText}>Confirm New Password</Text> */}
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeTextCN}
                    value={textCN}
                    placeholder="Confirm New Password"
                    placeholderTextColor ="grey"
                />   
                </View>
            </View>        

            <View style={{marginTop:'auto'}}>
                <TouchableOpacity
                 style={styles.EditButton}
                >
                <Text style={styles.EditText}>Update Password</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};
const styles=StyleSheet.create({
    mainView:{
        // margin:20,
        marginTop:40,
        flex:1
    },
    InputFieldView:{
        margin:20,
        marginTop:10,
        marginBottom:13,
        alignSelf:'center',
        backgroundColor:"#ffffff",
        width:'80%',
        flexDirection:'row',
        borderRadius:10,
        paddingLeft:20,
        overflow:"hidden",
        padding:3,
        elevation:5
    },
    inputTextView:{
        marginLeft:20,
    },
    InputIcon:{
        marginTop:10,
        marginBottom:10
    },
    input:{
        padding:0,
        fontSize:16,
        fontWeight:'bold',
        marginTop:10
    },
    inputText:{
        margin:0,
        marginTop:5,
        padding:0
    },
    EditButton:{
        backgroundColor:'#03204c',
        width:'80%',
        alignSelf:'center',
        marginTop:'auto',
        margin:10,
        borderRadius:20,
    },
    EditText:{
        color:'white',
        textAlign:'center',
        margin:10,
        fontWeight:'bold'
    }
})

export default UpdatePass;