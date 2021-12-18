import React, {useState} from 'react';
import {View, ScrollView, StyleSheet, Image, Text, TextInput, TouchableOpacity} from 'react-native';

const EditProfile=({navigation})=>{
    const [textN, onChangeTextN] = useState();
    const [textG, onChangeTextG] = useState();
    const [textA, onChangeTextA] = useState();
    const [textC, onChangeTextC] = useState();
    const [textE, onChangeTextE] = useState();
    const [textP, onChangeTextP] = useState();
    return(
        <View style={{flex:1}}>
            <View style={styles.header}>
                <View style={styles.ImageView}>
                <Image
                style={styles.profilePicture}
                source={require('../Assets/profile2.jpg')}
                />
                <TouchableOpacity
                 style={styles.editIcon}
                >

                <Image
                style={styles.edit}
                source={require('../Assets/Edit.png')}
                />
                </TouchableOpacity>
                </View>
            </View>


            <View style={styles.mainView}>
            <ScrollView>
                <View style={styles.InputFieldView}>
                <Image
                style={styles.InputIcon}
                source={require('../Assets/User.png')}
                />
                <View style={styles.inputTextView}>
                <Text style={styles.inputText}>Full Name</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeTextN}
                    value={textN}
                    placeholder="Jklohana"
                    placeholderTextColor ="grey"
                />           
                </View>
                </View>

                <View style={styles.InputFieldView}>
                <Image
                style={styles.InputIcon}
                source={require('../Assets/Email.png')}
                />
                <View style={styles.inputTextView}>
                <Text style={styles.inputText}>Email</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeTextE}
                    value={textE}
                    placeholder="Jklohana@gmail.com"
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
                <Text style={styles.inputText}>Password</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeTextP}
                    value={textP}
                    placeholder="*******"
                    placeholderTextColor ="grey"
                />   
                </View>
                <TouchableOpacity
                 style={styles.changepass}
                 onPress={()=>navigation.navigate("Update Password")}
                >
                <Text style={styles.Change}>Change</Text>
                </TouchableOpacity>
                </View>

                <View style={styles.InputFieldView}>
                <Image
                style={styles.InputIcon}
                source={require('../Assets/Call.png')}
                />
                <View style={styles.inputTextView}>
                <Text style={styles.inputText}>Phone Number </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeTextP}
                    value={textP}
                    placeholder="0333-8365474"
                    placeholderTextColor ="grey"
                />   
                </View>
                </View>

                <View style={styles.InputFieldView}>
                <Image
                style={styles.InputIcon}
                source={require('../Assets/Address.png')}
                />
                <View style={styles.inputTextView}>
                <Text style={styles.inputText}>Address</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeTextA}
                    value={textA}
                    placeholder="Filler text is text thats"
                    placeholderTextColor ="grey"
                />   
                </View>
                <TouchableOpacity
                 style={styles.changeAddress}
                 onPress={()=>navigation.navigate("Update Password")}
                >
                <Text style={styles.Change}>Change</Text>
                </TouchableOpacity>
                </View>

                <View style={styles.InputFieldView}>
                <Image
                style={styles.InputIcon}
                source={require('../Assets/City.png')}
                />
                <View style={styles.inputTextView}>
                <Text style={styles.inputText}>City</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeTextC}
                    value={textC}
                    placeholder="Karachi"
                    placeholderTextColor ="grey"
                />   
                </View>
                </View>

                <View style={styles.InputFieldView}>
                <Image
                style={styles.InputIcon}
                source={require('../Assets/Gender.png')}
                />
                <View style={styles.inputTextView}>
                <Text style={styles.inputText}>Gender</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeTextG}
                    value={textG}
                    placeholder="Female"
                    placeholderTextColor ="grey"
                />   
                </View>
                </View>
                </ScrollView>
                 </View>
                <TouchableOpacity
                 style={styles.EditButton}
                >
                <Text style={styles.EditText}>Save Changes</Text>
                </TouchableOpacity>
        </View>
    )
};
const styles= StyleSheet.create({
    header:{
        backgroundColor:"#b4cce4",
        height:100,
        padding:2,
        flexDirection:'row'
    },
    ImageView:{
        height:70,
        borderRadius:50,
        marginTop:45,
        marginLeft:10,
        width:90,
    },
    profilePicture:{
        height:90,
        borderRadius:50,
        width:90
    },
    editIcon:{
        marginTop:'auto',
        marginLeft:75,
        backgroundColor:'#03204c',
        width:30,
        height:30,
        borderRadius:50
    },
    edit:{
        alignSelf:'center',
        marginTop:5
    },
    mainView:{
    marginTop:60,
    marginBottom:40,
    height:420
    },
    InputFieldView:{
        margin:20,
        marginTop:0,
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
        marginTop:16
    },
    input:{
        padding:0,
        fontSize:16,
        fontWeight:'bold'
    },
    inputText:{
        margin:0,
        marginTop:5,
        padding:0
    },
    changepass:{
        marginLeft:'auto',
        margin:10,
        marginTop:15,
    },
    changeAddress:{
        marginLeft:'auto',
        margin:10,
        marginTop:8,
        marginBottom:0
    },
    Change:{
        fontWeight:'bold',
        color:'#03204c'
    },
    EditButton:{
        backgroundColor:'#03204c',
        width:'80%',
        alignSelf:'center',
        marginTop:'auto',
        margin:10,
        borderRadius:20,
        width:"80%"
    },
    EditText:{
        color:'white',
        textAlign:'center',
        margin:10,
        fontWeight:'bold'
    }
})
export default EditProfile;