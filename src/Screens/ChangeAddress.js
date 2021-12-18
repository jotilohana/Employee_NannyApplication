import React from 'react';
import {View, FlatList, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
const DATA = [
  {
     id:1,
     header:'Home',
     Address:'Filler text is text that shares some characteristics of a real written text, but is random',
  },
  {
     id:1,
     header:'Home',
     Address:'Filler text is text that shares some characteristics of a real written text, but is random'
  },
];

const ChangeAddress=({navigation})=>{

    const Card=({item})=>{
        return(
            <View style={styles.bodyView}>
            <View style={styles.bodyHeaderView}>
            <Text style={styles.bodyHeader}>{item.header}</Text>
            <View style={styles.headerbuttonView}>
            <TouchableOpacity
            style={styles.btn}
             onPress={()=>navigation.navigate("Change address")}
            >
            
            <Text style={styles.btntext}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.btn}
             onPress={()=>navigation.navigate("Change address")}
            >
            <Text style={styles.btntext}>Delete</Text>
            </TouchableOpacity>
            </View>
            </View>
            <Text>{item.Address}</Text>

            </View>
        )
    }
    return(
        <View>
             <TouchableOpacity
             onPress={()=>navigation.navigate("AddAddress")}
            >
            <View style={styles.buttonView}>
            <Image
            style={styles.image}
            source={require('../Assets/plus.png')}
            />
            <Text style={styles.text}>Add New Address</Text>
            </View>
            </TouchableOpacity>
            <FlatList
            data={DATA}
            renderItem={Card}
            keyExtractor={item => item.id}
          />
        </View>
    )
};

const styles= StyleSheet.create({
    buttonView:{
        flexDirection:"row",
        margin:20,
        paddingBottom:5,
        borderBottomWidth:1,
        borderBottomColor:'grey'
    },
    image:{
        width:20,
        height:20,
        marginRight:15
    },
    text:{
        fontWeight:'bold',
        color:'black',
        fontSize:16
    },
    bodyView:{
    margin:10,
    backgroundColor:"white",
    padding:20,
    borderRadius:10
    },
    bodyHeaderView:{
        flexDirection:'row'
    },
    bodyHeader:{
        fontWeight:"bold",
        color:'black',
        marginBottom:5,
        fontSize:18
    },
    headerbuttonView:{
        marginLeft:'auto',
        flexDirection:"row",
    },
    btn:{
        backgroundColor:'#03204c',
        padding:5,
        borderRadius:20,
        margin:5,
        marginTop:0,
        width:60
    },
    btntext:{
        color:'white',
        textAlign:"center"
    }

})
export default ChangeAddress;