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
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  Main_view:{
   height:320,
   marginBottom:30,
  },
  image:{
    width:'100%',
    height:320
  },
  //header
  Nav:{
    margin:'5%',
    flexDirection: 'row',
     flexWrap: 'wrap',
     textAlign:'center'
  },
  tinyLogo:{
    width:'8%',
    height:20,
    marginTop:'2%',
  },
  headerText:{
    color:'#03204c',
    fontSize:20,
    marginLeft:'auto',
    marginRight:'auto',
    fontWeight:'bold'
  },
  //Body
  home_body:{
    marginTop:'15%',
    width:'60%',
    marginLeft:'5%',
  },
  Home_text:{
    fontSize:20,
    color:'black',
    marginBottom:20
  },
  // ProfileSection
  imageView:{
    width:50,
    height:50,
    marginBottom:20,
    paddingBottom:400,
  },
  profile:{
    width:80,
    height:80,
    borderRadius:50,
    borderWidth:4,
    borderColor:'#03204c',
    position:'relative',
    bottom:26,
    marginLeft:10
  },
  profileTextView:{
    marginLeft:40,
    marginRight:10
  },
  profileText:{
    color:'white',
  },
});

const Home_swiper=()=>{
    return(
         <View style={styles.Main_view}>
      <Swiper style={styles.wrapper} 
      loop={false}
      showsButtons={false}
      paginationStyle={{
      justifyContent:'flex-end',
      margin:'13%'
}}
      dotStyle={{width:20,height:4, backgroundColor:'white'}}
      activeDotStyle={{width:20,height:4,backgroundColor:'#03204c'}}
      >
        <View style={styles.slide1}>
        <View style={styles.container}>
    <ImageBackground source={require('../Assets/Background_Images.jpg')}  
    style={styles.image}>                     
      <TouchableOpacity
      style={styles.Nav}
      >
        <Image
        style={styles.tinyLogo}
        source={require('../Assets/Menu_Icon.png')}
      />
      <Text style={styles.headerText}>Home Services1</Text>
      </TouchableOpacity>
      <View style={styles.home_body}>
      <Text style={styles.Home_text}>Fix the Broken Stuff by Asking for the Technicians</Text>
      </View>
      <View style={{backgroundColor:'#03204c', height:60,marginTop:50,margin:20,padding:8, flexDirection:'row'}}>
        <View style={styles.imageView}>
        <Image
        style={styles.profile}
        source={require('../Assets/profile.jpg')}
        />
      </View>
        <View style={styles.profileTextView}>
        <Text style={styles.profileText}>Certified Babysitter</Text>
        <Text style={styles.profileText}>Filler text is text some</Text>
        </View>
        </View>
    </ImageBackground>
        </View>
        </View>
        <View style={styles.slide1}>
        <View style={styles.container}>
    <ImageBackground source={require('../Assets/Background_Images.jpg')}  
    style={styles.image}>                     
      <TouchableOpacity
      style={styles.Nav}
      >
        <Image
        style={styles.tinyLogo}
        source={require('../Assets/Menu_Icon.png')}
      />
      <Text style={styles.headerText}>Home Services2</Text>
      </TouchableOpacity>
      <View style={styles.home_body}>
      <Text style={styles.Home_text}>Fix the Broken Stuff by Asking for the Technicians</Text>
      </View>
      <View style={{backgroundColor:'#03204c', marginTop:50,margin:20,height:60,margin:20,padding:8, flexDirection:'row'}}>
        <View style={styles.imageView}>
        <Image
        style={styles.profile}
        source={require('../Assets/profile.jpg')}
        />
      </View>
        <View style={styles.profileTextView}>
        <Text style={styles.profileText}>Certified Babysitter</Text>
        <Text style={styles.profileText}>Filler text is text some</Text>
        </View>
        </View>
    </ImageBackground>
        </View>
        </View>
        <View style={styles.slide1}>
        <View style={styles.container}>
    <ImageBackground source={require('../Assets/Background_Images.jpg')}  
    style={styles.image}>                     
      <TouchableOpacity
      style={styles.Nav}
      >
        <Image
        style={styles.tinyLogo}
        source={require('../Assets/Menu_Icon.png')}
      />
      <Text style={styles.headerText}>Home Services3</Text>
      </TouchableOpacity>
      <View style={styles.home_body}>
      <Text style={styles.Home_text}>Fix the Broken Stuff by Asking for the Technicians</Text>
      </View>
      <View style={{backgroundColor:'#03204c',marginTop:50,margin:20, height:60,margin:20,padding:8, flexDirection:'row'}}>
        <View style={styles.imageView}>
        <Image
        style={styles.profile}
        source={require('../Assets/profile.jpg')}
        />
      </View>
        <View style={styles.profileTextView}>
        <Text style={styles.profileText}>Certified Babysitter</Text>
        <Text style={styles.profileText}>Filler text is text some</Text>
        </View>
        </View>
    </ImageBackground>
        </View>
        </View>
      </Swiper>
      </View>
    )
}
export default Home_swiper;