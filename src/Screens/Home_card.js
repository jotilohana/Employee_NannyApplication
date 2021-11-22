import React from 'react';
import {Text, View, Image, StyleSheet, ScrollView} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Card = ({imageUri, name}) => {
  return (
    <View style={styles.container}>
      <Image source={imageUri} style={styles.img} />
      <View  style={styles.textView}>
        <Text style={styles.text}>{name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
     width: '70%',
      alignSelf: 'center',
      height: 270,
      borderRadius: 25,
      margin: 8,
      marginTop:0,
      backgroundColor: '#fff',
  },
  img: {
    width: wp('70%'),
    height: hp('25%'),
  },
  textView:{
    margin:15
  },
  text:{
    color: 'black',
     fontWeight: 'bold', 
  }
});

export default Card;
