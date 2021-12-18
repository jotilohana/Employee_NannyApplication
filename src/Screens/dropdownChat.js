import React, { Component, useState } from 'react';
import {FlatList, Text, View, TouchableOpacity, Image, StyleSheet} from 'react-native';


const Data = [
      {item: 'Add Member',  id:3  }];

   

const DropdownChat=({data})=>{
    const [clickedBtn, setClickedBtn] = useState(false)

    const List=()=>{
        return(
            <FlatList
            data={Data}
            keyExtractor={item=>item.id}
            renderItem={({item}) => (
            <View style={styles.listMainView}>
           <View style={styles.listSecondView}>
            <Text style={{color:'black',fontSize:15, textAlign:'center'}}>{item.item}</Text>
            </View>
            </View>
          )
          }
            />
        )
    }
    return(

    <View style={styles.buttonstyle}>
        {clickedBtn? List():null}
     <TouchableOpacity
        onPress={()=>{setClickedBtn(!clickedBtn)}}
        // onPress={()=>{}}
      >
        <Image
            style={{marginLeft:'auto'}}
            source={require('../Assets/Dots.png')}
            />
      </TouchableOpacity>
     </View>

    
    );
}

const styles=StyleSheet.create({
    listMainView:{
        marginLeft:'auto',
        // position:'absolute',
        // bottom:0,
    },
    listSecondView:{
        width:150,
        backgroundColor:'white',
        borderRadius:5,
        marginTop:35,
        padding:15
    },
    buttonstyle:{
        marginLeft:'auto',
        flexDirection:'row',
        position:"absolute",
        top:20,
        right:20
    }
})
  
export default DropdownChat;