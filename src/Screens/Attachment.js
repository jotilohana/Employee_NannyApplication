import React from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';


const Attachment=()=>{
    return(
      <View style={styles.mainView}>
      <View style={{ height:60,marginBottom:30,}}>
      <View style={{margin:10, width:60, backgroundColor:'#03204c',borderRadius:50, height:60, justifyContent:'center', alignItems:'center'}}>
      <Image
        source={require('../Assets/image.png')}
      />
      </View>
      <Text style={{textAlign:'center'}}>Image</Text>
      </View>
      <View style={{ height:60, marginBottom:30,}}>
      <View style={{margin:10, width:60, backgroundColor:'#03204c',borderRadius:50, height:60, justifyContent:'center', alignItems:'center'}}>
      <Image
        source={require('../Assets/video.png')}
      />
      </View>
      <Text style={{textAlign:'center'}}>Video</Text>
      </View>
      <View style={{ height:60, marginBottom:30,}}>
      <View style={{margin:10, width:60, backgroundColor:'#03204c',borderRadius:50, height:60, justifyContent:'center', alignItems:'center'}}>
      <Image
        source={require('../Assets/document.png')}
      />
      </View>
      <Text style={{textAlign:'center'}}>Document</Text>
      </View>
      </View>

    )
}

const styles= StyleSheet.create({
  mainView:{
    backgroundColor:"white", 
    height:130, 
    flexDirection:"row", 
    alignItems:'center', 
    justifyContent:'center', 
    marginTop:'auto', 
    marginBottom:210, 
    margin:20, 
    borderRadius:25
  }
})
export default Attachment;