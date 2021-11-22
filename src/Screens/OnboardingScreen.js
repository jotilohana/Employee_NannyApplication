import React from 'react';
import {Text,Image, View, StyleSheet, ImageBackground, TouchableOpacity} from 'react-native';
import Swiper from 'react-native-swiper';

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
  },
  slide2: {
    justifyContent: 'center',
  },
  slide3: {
    justifyContent: 'center',
  },
 
  Main_view:{
   flex:1,
   backgroundColor:'#fff'
  },
    
  //Body
  home_body:{
    marginTop:'30%',
    marginLeft:'5%',
  },
  lighttext:{
        color:'black',
        fontSize:30,
        fontWeight:'bold',
    },
   subtext:{
        fontSize:16,
        color:'black',
    },
  logo:{
        width:300,
        height:250,  
        alignSelf:'center' ,
        marginTop:'10%'       
    },
    nextbutton:{
        backgroundColor:'#03204c',
        margin:15, 
        padding:7, 
        borderRadius:15,
        width:50,
        flexDirection:'column',
        alignSelf:'flex-end',
        position:'absolute',
        top:260,
        color:'#fff',
        textAlign:'center'
        
    },
    donebutton:{
        borderRadius:15,
        alignSelf:'flex-end',
        position:'absolute',
        top:600,
        textAlign:'center',
        padding:10
    },
   });

const OnBoardingScreen=({navigation})=>{
    
    return(
         <View style={styles.Main_view}>
      <Swiper style={styles.wrapper} 
      loop={false}
      paginationStyle={{
      justifyContent:'flex-start',
      marginLeft:'5%',
}}
      dotStyle={{width:20,height:4, backgroundColor:'#F0F2ED'}}
      activeDotStyle={{width:20,height:4,backgroundColor:'#03204c'}}
      showsButtons={true}
      nextButton={<Text style={styles.nextbutton}>Next</Text>}
      prevButton={<Text style={styles.buttonText}></Text>}
    
      >
        <View style={styles.slide1}>
        <View style={styles.container}>  

      <View style={styles.home_body}>
      <Text style={styles.lighttext}>How it works</Text>
      <Text style={styles.subtext}>Guardian will receive SMS alerts with GEO location</Text>
      </View>

      <Image style={styles.logo}
       source={require('../Assets/image1.jpg')} />
        </View>
        </View>

        <View style={styles.slide1}>
        <View style={styles.container}>
                        
      <View style={styles.home_body}>
      <Image style={styles.logo}
       source={require('../Assets/image1.jpg')} />
      <Text style={styles.lighttext}>How it works</Text>
      <Text style={styles.subtext}>Guardian will receive SMS alerts with GEO location</Text>
    </View>
      </View>
        </View>

        <View style={styles.slide1}>
        <View style={styles.container}>  

      <View style={styles.home_body}>
      <Text style={styles.lighttext}>How it works</Text>
      <Text style={styles.subtext}>Guardian will receive SMS alerts with GEO location</Text>
      </View>

      <Image style={styles.logo}
       source={require('../Assets/image1.jpg')} />
        </View>
        <TouchableOpacity
        style={styles.donebutton}
        onPress={()=>navigation.navigate('Login')}
        >
         <Image
       source={require('../Assets/done.png')} />
      </TouchableOpacity>
        </View>

      </Swiper>
      </View>
    )
}
export default OnBoardingScreen;