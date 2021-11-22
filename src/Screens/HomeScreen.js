import AboutUs from './aboutUs';
import React from 'react';
import {Text, View, ScrollView, FlatList, StyleSheet,TouchableOpacity} from 'react-native';
import Home_swiper from './Home_swiper';
import Home_card from './Home_card';
import TestimonialSection from './testimonialSection';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';


const DATA = [
  {
    image: require('../Assets/Background_Images.jpg'),
    name: 'Wedding photos',
  },
  {
    image: require('../Assets/Background_Images.jpg'),
    name: 'Party photos',
  },
  {
    image: require('../Assets/Background_Images.jpg'),
    name: 'Picnic photos',
  },
  {
    image: require('../Assets/Background_Images.jpg'),
    name: 'School photos',
  },
  {
    image: require('../Assets/Background_Images.jpg'),
    name: 'Uni photos',
  },
];


const HomeScreen = ({navigation}) => {
  const ServiceHeader=()=>{
    return(
      <View style={{flexDirection:'row',}}>
        <Text style={{color:'black',fontWeight:'bold',fontSize:25,margin:10}}>Services</Text>
        <View style={{marginLeft:'auto'}}>
        <TouchableOpacity
          onPress={() =>navigation.navigate('Service')}
          style={{
           backgroundColor: "#03204c",
           padding:5,
           borderRadius:25,
           margin:10,
            }}
          >
          <Text style={{color:'white'}}>View All</Text>
        </TouchableOpacity>
        </View>
       </View>
    )
  }
  const renderItem = ({item}) => {
    return <Home_card imageUri={item.image} name={item.name} />
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.swiper}>
        <Home_swiper />
      </View>
      <ServiceHeader />
      <FlatList
        keyExtractor={item => item.name}
        data={DATA}
        renderItem={renderItem}
        horizontal
      />
      <View>
      <AboutUs />
      </View>
      <View style={styles.mainView}>
      <Text style={styles.mainText}>Testimonial</Text>
      <TestimonialSection />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainText:{
      color:'black',
      textAlign:'center',
      fontSize:25,
      fontWeight:'bold',
      marginTop:20
  },
});
export default HomeScreen;