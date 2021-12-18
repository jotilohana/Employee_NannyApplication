import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, FlatList,ImageBackground, Image} from 'react-native';
import ServiceDetails from './ServiceDetails';

const DATA = [
  {
     text: 'How to use it1',
     id:1,
     image: require('../Assets/Services/Eldercare.png'),
  },
  {
     text: 'How to use it2',
     id:2,
    image: require('../Assets/Services/Meal.png'),
  },
  {
    text: 'How to use it3',
    id:3,
    image: require('../Assets/Services/support.png'),
  },
  {
     text: 'How to use it4',
    id:4,
    image: require('../Assets/Services/Maintenance.png'),
  },
  {
     text: 'How to use it4',
    id:4,
    image: require('../Assets/Services/housekeeper.png'),

  },
  
];

const Service=({navigation})=>{
const ServicePortion=({text,image})=>{
    return(
        <View style={styles.MainView}>
        <TouchableOpacity
        style={styles.button}
        onPress={(props)=>navigation.navigate("Service Details")}
      >

        <View style={styles.container}>
    <View style={styles.imageView}>
      <Image source={image} style={styles.img} />
      </View>
      <View  style={styles.textView}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>

      </TouchableOpacity>
        </View>
        )
    }
   const renderItem = ({ item }) => (
    <ServicePortion text={item.text}  image={item.image}/>
  );

    return(
        <View style={{flex:1,height:"100%"}}>
            <View style={styles.headerText}>
            <Text style={styles.headerText}>Services</Text>
            </View>
            <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            Vertical
      />
        </View>
    )
}
const styles = StyleSheet.create({
    headerText:{
        margin:5,
        fontWeight:'bold',
        fontSize:20,
        color:'black',
    },
    MainView:{
        height:200,
        margin:20,
        borderRadius:25,
        overflow:'hidden',
        backgroundColor:'white'
    },
    Maintext:{
        fontSize:20,
        color:'black',
        fontWeight:'bold',
        paddingTop:"30%",
        margin:20,
        marginLeft:0,
        marginTop:"auto"
    },
    
    img: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  imageView:{
    width:'100%',
    height:150,
    marginTop:10,
  },
  text:{
    color: 'black',
     fontWeight: 'bold', 
     fontSize:18,
     textAlign:'center'
  }

})
export default Service;