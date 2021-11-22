import React, { Component } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
 
import Swiper from 'react-native-swiper';
 
const styles = StyleSheet.create({
  wrapper: {
  },
  mainText:{
      color:'black',
      textAlign:'center',
      fontSize:25,
      fontWeight:'bold',
      margin:10
  },
  slide1: {
    flex: 1,
    marginTop:53,
    backgroundColor:'#03204c',
    borderRadius:25,
  },
  slide2: {
    flex: 1,
     marginTop:50,
    backgroundColor:'#03204c',
    borderRadius:25,
  },
  slide3: {
    flex: 1,
     marginTop:50,
    backgroundColor:'#03204c',
    borderRadius:25,
  },
  imageView:{
      alignSelf:'center',
      position:'absolute',
      bottom:230,
      borderRadius:47,
      marginTop:5,
  },
  Image:{
    width:80,
    height:80,
    borderRadius:50,
    borderColor:'#03204c',
    alignSelf:'center',    
  },
  headerText:{
    color:"white",
    textAlign:'center',
    fontWeight:'bold',
    fontSize: 18,
  },
  apos:{
      marginLeft:20,
      fontSize:30,
      color:'white',
  },
  text: {
    color: 'white',
    fontSize: 13,
    padding:15,
    paddingTop:0

  },
  aposRight:{
    marginLeft:'auto',
    marginRight:20,
    fontSize:30,
    color:'white',
  },
})
const TestimonialSection=()=> {
    return (
    <View style={{padding:8,height:350,borderRadius:25}}>
      <Swiper
      showsButtons={false}
      loop={false}
      paginationStyle={{
      margin:'3%'
      }}
      dotStyle={{width:15,height:4, backgroundColor:'grey', borderRadius:25}}
      activeDotStyle={{width:15,height:4,backgroundColor:'white'}}
      >
     <View style={styles.slide1}>
        <View style={styles.imageView}>
         <Image style={styles.Image} source={require("../Assets/profile.jpg")} />
        </View>
        <View style={{marginTop:50}}>
         <Text style={styles.headerText}>Hello World</Text>
         <Text style={styles.apos}>❝</Text>
         <Text style={styles.text}>Filler text is text that shares some characteristics of a real written text, but is random or otherwise
          generated. It may be used to display a sample of fonts, generate text for testing, or to spoof an e-mail spam filter</Text>
        <Text style={styles.aposRight}>❝</Text>
        </View>
        </View>


        <View style={styles.slide2}>
         <View style={styles.imageView}>
         <Image style={styles.Image} source={require("../Assets/profile.jpg")} />
        </View>
        <View style={{marginTop:50}}>
         <Text style={styles.headerText}>Hello World2</Text>
        <Text style={styles.apos}>❝</Text>
         <Text style={styles.text}>Filler text is text that shares some characteristics of a real written text, but is random or otherwise
          generated. It may be used to display a sample of fonts, generate text for testing, or to spoof an e-mail spam filter</Text>
          <Text style={styles.aposRight}>❝</Text>
        </View>
        </View>

        <View style={styles.slide3}>
         <View style={styles.imageView}>
         <Image style={styles.Image} source={require("../Assets/profile.jpg")} />
        </View>
        <View style={{marginTop:50}}>
         <Text style={styles.headerText}>Hello World3</Text>
         <Text style={styles.apos}>❝</Text>
         <Text style={styles.text}>Filler text is text that shares some characteristics of a real written text, but is random or otherwise
          generated. It may be used to display a sample of fonts, generate text for testing, or to spoof an e-mail spam filter</Text>
        <Text style={styles.aposRight}>❝</Text>
        </View>
        </View>
      </Swiper>
      </View>
    )
  
};
 
export default TestimonialSection;